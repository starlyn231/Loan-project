import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { UpdateCustomer, createCustomers, deleteCustomer, getCustomers } from '../../callApi/Customer';
import FormModal from '../../components/FormModal/FormModal';
import TextField from '../../components/TextField/TextField';
import { SmallHeightDivider } from '../../themes/Styles';
import { SchemaCustomer } from './Schema';
//MUI IMPORT
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
  Avatar, Box, Button, Card,
  Checkbox, Grid, Paper, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { useFormik } from "formik";
import LogoDark from '../../assets/image/logo-dark.svg';
import Label from '../../components/label/Label';
import Scrollbar from '../../components/scrollbar/Scrollbar';
import UserListHead from '../../sections/@dashboard/user/UserListHead';
import UserListToolbar from '../../sections/@dashboard/user/UserListToolbar';
import { tokens } from '../../themes/theme';
import Header from '../Home/components/Header';
import { TABLE_HEAD } from './UtilCustomer';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
export const CustomerPage = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [eventsData, setEventsData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const theme = useTheme();
  const colors = tokens;
  const formik = useFormik({
    initialValues: {
      id: null,
      name: '',
      lastName: "",
      job: "",
      salary: "",
      address: "",
      province: "",
      country: "",
      sector: "",
      phone: "",
      email: "",
      cedula: ''
    },
    validationSchema: SchemaCustomer,
    enableReinitialize: true,
    onSubmit: (values) => {

      if (values.id !== null) {
        handleUpdateCustomer(values);
      } else {
        handleAddCustomer(values);
      }
    },
  });

  const mutation = useMutation(createCustomers);
  const updateMutation = useMutation(UpdateCustomer);

  const { data: listCustomers, isLoading, isError } = useQuery(
    ["listCustomers"],
    () => getCustomers()
  );


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = listCustomers?.data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listCustomers?.length) : 0;
  const isNotFound = !listCustomers?.data.length && !!filterName;


  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEditRow = (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formik.setFieldValue(key, data[key]);
      }
      setModalOpen(true);
    }

  }
  const handleModal = () => {
    setModalOpen(!modalOpen);
    setTimeout(() => {
      formik.resetForm();
    }, 500);

  };

  //add data of customer 
  const handleAddCustomer = async (formData) => {
    const requestCustomer = {
      name: formData.name,
      lastName: formData.lastName,
      job: formData.job,
      salary: formData.salary,
      address: formData.address,
      province: formData.province,
      country: formData.country,
      sector: formData.sector,
      phone: formData.phone,
      email: formData.email,
      cedula: formData.cedula
    };

    mutation.mutate(requestCustomer, {
      onSuccess: (response) => {
        if (response?.success) {
          queryClient.invalidateQueries('listCustomers');
          handleModal();
          toast.success(' Cliente agregado correctamente');
          formik.resetForm();
        }
      },
      onError: (error) => {
        toast.error(error.response.data.error);
      },
    });


  };

  //update data of customer 
  const handleUpdateCustomer = async (formData) => {
    const request = {
      id: formData.id,
      name: formData.name,
      lastName: formData.lastName,
      job: formData.job,
      salary: formData.salary,
      address: formData.address,
      province: formData.province,
      country: formData.country,
      sector: formData.sector,
      phone: formData.phone,
      email: formData.email,
      cedula: formData.cedula
    };

    updateMutation.mutate({
      id: request.id,
      request
    }, {
      onSuccess: (response) => {

        if (response?.success) {
          queryClient.invalidateQueries('listCustomers');
          handleModal()
          toast.success('Registro Actualizado');
          formik.resetForm();
        }
      },
      onError: (error) => {
        toast.error(error.response.data.error);
      },
    });


  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteCustomer(id);
      if (response.success) {
        toast.success('Cliente eliminado correctamente ')
        queryClient.invalidateQueries('listCustomers');
      } else {
        toast.error('Ha ocurrido un error')
      }
    } catch (error) {
      toast.error('Error eliminando cliente', error)
    }

  }




  if (isLoading || isError) return <LoadingIndicator/>;



  return (

    <>
      <div style={{}} >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Solicitudes de prestamos" subtitle="Todo a tu alcance" />

        </Box>
        <Grid
      
          alignItems='flex-start'
          justifyContent='center'
          container
          direction='row'
          x
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>

          <Stack direction="row" justifyContent="flex-end"
            mr={5} >

            
              <Button sx={{
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                minHeight: '42px', borderRadius: ' 47px'
              }} variant="contained" startIcon={<AddOutlinedIcon />} onClick={handleModal} >
                Agregar Cliente nuevo
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Card sx={{}}>
          <UserListToolbar placeholderProp={'Buscar por nombre'} numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={listCustomers?.data?.length}
                  numSelected={selected?.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {/* {filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => { */}
                  {listCustomers.data.map((row) => {
                    const { id, name, lastName, cedula, job, role, status, company, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                       

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{lastName}</TableCell>

                        <TableCell align="left">{cedula}</TableCell>
                        <TableCell align="left">{job}</TableCell>
                        <TableCell align="left"> Licenciado </TableCell>
                        { /* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}
                        <TableCell align="left"> 809-530-8959 </TableCell>
                        <TableCell align="left">
                          <Label color={(status === 'banned' && 'error') || 'success'}>Activo{/*sentenceCase(status)*/}</Label>
                        </TableCell>

                        <TableCell align="right">
                          <ModeEditOutlineOutlinedIcon sx={{ mr: 2 }} onClick={() => handleEditRow(row)} />
                          <DeleteForeverOutlinedIcon sx={{ mr: 2 }} onClick={() => handleDelete(row.id)} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            n/a
                          </Typography>

                          <Typography variant="body2">
                            Ningun resultado encontrado &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Intenta nueva vez
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={listCustomers?.data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </div>
    


      <FormModal
        sx={{ zIndex: 1000 }}
        onClose={handleModal}
        open={modalOpen}
        title='Agregar Cliente Nuevo'
        icon={LogoDark}
        disableEscapeKeyDown
        maxWidth='xl'
        fullScreen
      >
        <SmallHeightDivider />
        <Grid
          alignItems='flex-start'
          justifyContent='center'
          container
          direction='row'
          x
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Nombres'
              type='text'
              id='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.name &&
                Boolean(formik.errors.name)
              }
              helperText={
                formik.touched.name &&
                formik.errors.name
              }
              required
            />
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Apellidos'
              type='text'
              id='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.lastName &&
                Boolean(formik.errors.lastName)
              }
              helperText={
                formik.touched.lastName &&
                formik.errors.lastName
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Cedula'
              type='text'
              id='cedula'
              mask={
                "999-9999999-9"
              }

              disabled={formik.values.id !== null ? true : false}
              unMaskedValue={true}
              value={formik.values.cedula}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.cedula &&
                Boolean(formik.errors.cedula)
              }
              helperText={
                formik.touched.cedula &&
                formik.errors.cedula
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Donde trabaja actualmente'
              type='text'
              id='job'
              value={formik.values.job}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.job &&
                Boolean(formik.errors.job)
              }
              helperText={
                formik.touched.job &&
                formik.errors.job
              }
              required
            />
          </Grid>



          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Salario Actual'
              type='number'
              id='salary'

              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.salary &&
                Boolean(formik.errors.salary)
              }
              helperText={
                formik.touched.salary &&
                formik.errors.salary
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Pais'
              type='text'
              id='country'
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.country &&
                Boolean(formik.errors.country)
              }
              helperText={
                formik.touched.country &&
                formik.errors.country
              }
              required
            />
          </Grid>
          <Grid item xs={8} sm={4} md={6}>
            <TextField
              title='Provincia'
              type='text'
              id='province'
              required
              value={formik.values.province}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.province && Boolean(formik.errors.province)}
              helperText={formik.touched.province && formik.errors.province}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Sector'
              type='text'
              id='sector'
              value={formik.values.sector}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.sector &&
                Boolean(formik.errors.sector)
              }
              helperText={
                formik.touched.sector &&
                formik.errors.sector
              }
              required
            />
          </Grid>


          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Teléfono móvil'
              type='text'
              id='phone'
              required
              mask={
                "(999)-999-9999"
              }
              unMaskedValue={true}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Email'
              type='text'
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.email &&
                Boolean(formik.errors.email)
              }
              helperText={
                formik.touched.email &&
                formik.errors.email
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Dirección'
              type='text'
              id='address'
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
        </Grid>


        <SmallHeightDivider />

        <Box component="div" width={{ xs: " 100%", md: "50%", lg: "30%", xl: "30%" }} >
          <Button sx={{
            minHeight: '48px',
            width: '100%',
            borderRadius: '47px',
            color: ' white',
            backgroundColor: (theme) => `${theme.palette.primary.main}!important`
          }} onClick={() => formik.handleSubmit()}
            startIcon={<LibraryAddOutlinedIcon />} >
            {formik.values.id !== null ? "ACTUALIZAR REGISTRO" : "AGREGAR CLIENTE"}

          </Button>
        </Box>

      </FormModal>
    </>

  )
}




