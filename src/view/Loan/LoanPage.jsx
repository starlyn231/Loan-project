import { useEffect, useState } from 'react';
//MUI IMPORT
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//import { sentenceCase } from 'change-case';
import FormModal from '../../components/FormModal/FormModal';
import TextField from '../../components/TextField/TextField';
import { SmallHeightDivider } from '../../themes/Styles';
import { tokens } from "../../themes/theme";
import Header from "../Home/components/Header";
//MUI IMPORT
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import {
  Avatar,
  Box,
  Button, Card,
  Checkbox,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
  Typography, alpha, useTheme
} from '@mui/material';
import { useFormik } from 'formik';
import { SchemaLoan } from './Schema';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import LogoDark from '../../assets/image/logo-dark.svg';
import { createLoan, getLoans } from '../../callApi/Loan';
import Select from '../../components/Select/Select';
import Scrollbar from '../../components/scrollbar/Scrollbar';
import AxiosHandler from '../../requestManager/AxiosHandler';
import { TABLE_HEAD, applySortFilter, getComparator, statusLoan } from './LoanMock';
import USERLIST from '../../_mock/user';
import UserListToolbar from '../../sections/@dashboard/user/UserListToolbar';
import UserListHead from '../../sections/@dashboard/user/UserListHead';
import Label from '../../components/label/Label';
import { getCustomers } from '../../callApi/Customer';
import SelectStatus from './SelectStatus';
import { useNavigate } from 'react-router-dom';
const LoanPage = () => {
  const navigation = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [CustomerData, setCustomerData] = useState([]);
  const [CustomerId, setCustomerId] = useState(null);
  const theme = useTheme();
  const colors = tokens;
  //**** */

  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [selectedName, setName] = useState('');
  const [orderBy, setOrderBy] = useState('nameClient');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');

  const { data: listLoans, isLoadingLoan, isErrorLoan } = useQuery(
    ["listLoans"],
    () => getLoans()
  )


  // console.log(USERLIST)

  const formik = useFormik({
    initialValues: {
      name: '',
      salary: "",
      job: "",
      cedula: '',
      customerid: null,
      id: null,
      amount: '',
      loanPayment: "",
      time: "",
      categories: "",
      motiveLoan: "",
      interestRate: "",
    },
    validationSchema: SchemaLoan,
    enableReinitialize: true,
    onSubmit: (values) => {

      if (values.id !== null) {

        handleUpdateLoan(values);
      } else {
        handleAddLoan(values);
      }
    },
  });


  const handleModal = () => {
    setModalOpen(!modalOpen);
    setTimeout(() => {
      formik.resetForm();
    }, 500);

  };
  const handleUpdateLoan = async (formData) => {
    console.log(formData)
    const request = {
      id: formData.name,
      lastName: formData.lastName,
      job: formData.job,
      salary: formData.salary,
      loanPayment: formData.loanPayment,
      amount: formData.amount,
      time: formData.time,
      categories: formData.categories,
      motiveLoan: formData.motiveLoan,
      interestRate: formData.interestRate
    };

  }

  const mutation = useMutation(createLoan);
  const handleAddLoan = async (formData) => {
    console.log(formData)
    const request = {
      name: selectedName,
      id: formData.name,
      lastName: formData.lastName,
      cedula: formData.cedula,
      job: formData.job,
      salary: formData.salary,
      loanPayment: formData.loanPayment,
      amount: formData.amount,
      time: formData.time,
      categories: formData.categories,
      motiveLoan: formData.motiveLoan,
      interestRate: formData.interestRate
    };

    mutation.mutate(request, {
      onSuccess: (response) => {
        if (response?.success) {
          queryClient.invalidateQueries('listLoans');
          handleModal();
          toast.success(' Solicitud realizada correctamente');
          //formik.resetForm();
        }
      },
      onError: (error) => {
        toast.error(error.response.data.error);
      },
    });

  }


  const getDataCustomer = async (id, test) => {

    try {
      let listCustomers = await AxiosHandler().get(`/customers/`)
      if (listCustomers.data.success) {
        setCustomerData(
          listCustomers?.data?.data.map((item) => ({

            value: item.id,
            label: item.name + ' ' + item.lastName,
          }))
        );
      }
    } catch (error) {
      console.log(error)
    }

    if (id !== null && id !== undefined) {

      let customerData = await AxiosHandler().get(
        `/customer/${id}`
      );
      setName(test.target.options[test.target.selectedIndex].text)
      console.log(selectedName)
      // set value of  formik field 
      formik.setFieldValue('cedula', customerData?.data?.data?.cedula);
      formik.setFieldValue('job', customerData?.data?.data?.job);
      formik.setFieldValue('salary', customerData?.data?.data?.salary);
    }

  }


  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
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
    setSearchTerm(event.target.value);
  };

  const filteredData = listLoans?.data.filter((item) =>
    item.nameClient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listLoans?.data.length) : 0;


  const goToRoute = (route) => {
 
    navigation(route);
  };

  useEffect(() => {

    getDataCustomer();

  }, []);

  

  if (isLoadingLoan || isErrorLoan) return <div>Cargando...</div>;
  //const filteredUsers = applySortFilter(listLoans?.data, getComparator(order, orderBy), filterName);
  // const isNotFound = !filteredUsers.length && !!filterName;
  // console.log(listLoans?.data)
  return (
    <Box m="10px">
      {/* HEADER */}
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
        <Grid item xs={12} sm={12} md={12} >

          <Stack direction="row" justifyContent="flex-end"
            mr={5} >

            <Button sx={{
              color: colors.grey[100],
              fontSize: "14px",

              fontWeight: "bold",
              padding: "10px 20px",
              minHeight: '42px', borderRadius: ' 47px'
            }} variant="contained" startIcon={<AddOutlinedIcon />} onClick={handleModal} >
              Solicitud de prestamo nuevo
            </Button>
          </Stack>
        </Grid>

      </Grid>

      {/*  Table of loans */}
      <Card >
        <Stack direction="row" alignItems="center" justifyContent="space-between"  >
          <UserListToolbar filterName={searchTerm} onFilterName={handleFilterByName} placeholderProp={'Filtrar Cliente'} />

          <SelectStatus options={statusLoan}/>
        </Stack>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                onRequestSort={handleRequestSort}
              // onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  //  {listLoans?.data?.map((row) => {
                  const { id, nameClient, amount, interestRate, status, company, isVerified } = row;

                  return (
                    <TableRow hover key={id} tabIndex={-1} role="checkbox" >
                      <TableCell component="th" scope="row" padding="none">
                        <Typography variant="subtitle2" noWrap>
                          {nameClient}
                        </Typography>

                      </TableCell>

                      <TableCell align="left"> {
                        Intl.NumberFormat('en-US',
                          { style: 'currency', currency: 'USD' }
                        ).format(amount)
                      }</TableCell>

                      <TableCell align="left">{interestRate}%</TableCell>

                      <TableCell align="left"> 15/15/2026</TableCell>

                      <TableCell align="left">
                        <Label color={(status === 'banned' && 'error') || 'success'}>{ /*sentenceCase(status)*/}Atraso</Label>
                      </TableCell>
                      <TableCell align="left">
                        $20,0000.00
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="Ver detalle de este prestamo">
                     
                          <IconButton onClick={() => navigation(`/detailLoan/${id}`)}>
                            <RemoveRedEyeOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Modificar prestamo">
                          <IconButton>
                            <ModeEditOutlineOutlinedIcon />
                          </IconButton>
                        </Tooltip>


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

              {/*isNotFound && (
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
                      )*/}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={listLoans?.data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>




      {/*  MODAL REQUEST LOAN */}



      <FormModal
        onClose={handleModal}
        open={modalOpen}
        title='Solicitud De Prestamo'
        icon={LogoDark}
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
          { /*  <Grid item xs={12} sm={4} md={6}>
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
            </Grid> */}


          <Grid item xs={8} sm={4} md={6}>
            <Select
              title='Nombre Completo'

              //tener pendiente que este es el id
              type='text'
              id='name'
              data={CustomerData}
              value={formik.values.name}
              onChange={(e) => {
                formik.handleChange(e);
                getDataCustomer(e.target.value, e);

              }}
              onBlur={formik.handleBlur}
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              helperText={formik.touched.name && formik.errors.name}
              required
            />
          </Grid>


          <Grid item xs={12} sm={4} md={6}>
            <TextField
              disabled={true}
              title='Cedula'
              type='text'
              id='cedula'
              mask={
                "999-9999999-9"
              }

              // disabled={formik.values.id !== null ? true : false}
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
              disabled={true}
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



          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Salario Actual'
              type='number'
              id='salary'
              disabled={true}
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
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Monto Total del prestamo'
              type='number'
              id='amount'
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.amount &&
                Boolean(formik.errors.amount)
              }
              helperText={
                formik.touched.amount &&
                formik.errors.amount
              }
              required
            />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <TextField
              title='Monto de las Cuotas '
              type='number'
              id='loanPayment'
              required
              value={formik.values.loanPayment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.loanPayment && Boolean(formik.errors.loanPayment)}
              helperText={formik.touched.loanPayment && formik.errors.loanPayment}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Cantidad Cuotas '
              type='number'
              id='time'
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.time &&
                Boolean(formik.errors.time)
              }
              helperText={
                formik.touched.time &&
                formik.errors.time
              }
              required
            />
          </Grid>


          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Categoria de este prestamo'
              type='text'
              id='categories'
              unMaskedValue={true}
              value={formik.values.categories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.categories && Boolean(formik.errors.categories)}
              helperText={formik.touched.categories && formik.errors.categories}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Motivo  del prestamo'
              type='text'
              id='motiveLoan'
              value={formik.values.motiveLoan}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.motiveLoan &&
                Boolean(formik.errors.motiveLoan)
              }
              helperText={
                formik.touched.motiveLoan &&
                formik.errors.motiveLoan
              }
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              title='Tasa de Interes'
              type='number'
              id='interestRate'
              required
              value={formik.values.interestRate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.interestRate && Boolean(formik.errors.interestRate)}
              helperText={formik.touched.interestRate && formik.errors.interestRate}
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
            {formik.values.id !== null ? "EDITAR PRESTAMO" : "ENIAR SOLICITUD"}

          </Button>
        </Box>

      </FormModal>

    </Box>
  )
}

export default LoanPage
