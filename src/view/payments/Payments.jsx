
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import UserListToolbar from '../../sections/@dashboard/user/UserListToolbar';
import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Button, Card, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Menuitems, checkObject } from './Mock';
import { Link, NavLink } from "react-router-dom";
import PaymentsAside from './components/PaymentsAside';
import { ButtonsMenuContainer, SmallHeightDivider, StyledButtonOutlined, boxShadowConfig } from '../../themes/Styles';
import { tokens } from '../../themes/theme';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FormModal from '../../components/FormModal/FormModal';
import LogoDark from '../../assets/image/logo-dark.svg';
import Select from '../../components/Select/Select';
import { SchemaPayment } from './SchemaPayment';
import { useFormik } from 'formik';
import TextField from '../../components/TextField/TextField';
import { createPayments, getPayments } from '../../callApi/PaymentApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getLoanById, getLoans } from '../../callApi/Loan';
import AxiosHandler from '../../requestManager/AxiosHandler';
import { toast } from 'react-toastify';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },

  {
    field: 'fecha',
    headerName: 'fecha',
    type: 'Date',
    width: 110,
    editable: false,
  },
  {
    field: 'nameClient',
    headerName: 'Nombre',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.nameClient || ''} ${params.row.nameClient || ''}`,
  },

  {
    field: 'MontoPagado',
    headerName: 'Monto',
    type: 'Number',
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, fecha: '2020/10/10', nameClient: 'Snow Petro', MontoPagado: '2,500', },
  { id: 2, fecha: '2020/10/10', nameClient: 'Snow Petro', MontoPagado: '2,500', },
  { id: 3, fecha: '2020/10/10', nameClient: 'Snow Petro', MontoPagado: '2,500', },
];

const Payments = () => {
  const colors = tokens;
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loanData, setLoanData] = useState([]);

  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {

      id: null,
      payment: '',


    },
    validationSchema: SchemaPayment,
    enableReinitialize: true,
    onSubmit: (values) => {

      addPayment(values);
    },
  });

  const handleModal = () => {
    setModalOpen(!modalOpen);
    formik.setFieldValue('id', null);
    formik.resetForm();

  };

  const { data: dataLoanUnique, loadingLoan, errorLoan } = useQuery(
    ["dataLoanUnique", formik.values.id],
    () => getLoanById(formik.values.id)
  )

  const { data: listPayments, loadingPayments, errorPayments } = useQuery(
    ["listPayments"],
    () => getPayments()
  )
  const getDataLoan = async () => {
    const response = await AxiosHandler().get(`/loan`);

    if (response?.data?.success) {

      setLoanData(
        response?.data?.data.map((item) => ({
          value: item._id,
          label: `${item.nameClient}`,
        })))

    }

  }
  console.log(dataLoanUnique)


  const handleFilterByName = (event) => {
    //setPage(0);
    setSearchTerm(event.target.value);
  };

  const filteredData = rows.filter((item) =>
    item?.nameClient?.toLowerCase().includes(searchTerm.toLowerCase())
    // item?.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mutation = useMutation(createPayments);
  const addPayment = (formData) => {
    console.log(formData);


    const request = {
      id: formData.id,
      payment: formData.payment,

    };


    mutation.mutate({
      id: request.id,
      request
    }, {
      onSuccess: (response) => {
        if (response?.success) {
          queryClient.invalidateQueries('listLoans');
          console.log(response)
          handleModal();
          toast.success(' Pago realizado correctamente correctamente');
        }
      },
      onError: (error) => {
        toast.error(error.response.data.error);
      },
    });

  }


  useEffect(() => {
    getDataLoan()

  }, [])
  return (

    <Grid
      container
      direction='row'
      justifyContent='center'
      height='100vh'
      spacing={{ xs: 2, md: 1 }}
      columns={{ xs: 6, sm: 8, md: 12 }}>
      <Grid item xs={12} md={8} lg={8}     >
        <Box sx={{ height: 400, width: '100%', }}>
          {/*  TOP PAYMENTS */}


          <Card
            sx={{
              display: 'flex',
              py: 2,

              // boxShadow: boxShadowConfig,
              textAlign: 'center',
              direction: "row",
              justifyContent: 'center'
            }}   >

            <Stack display='flex' width="100%"     direction={{ xs: "column", md: "row" , lg:'row'}} alignItems="center" justifyContent='space-between'
              ml={2} mr={2} >
           
                <UserListToolbar filterName={searchTerm} onFilterName={handleFilterByName} placeholderProp={'Filtrar pagos'} />

       
              <ButtonsMenuContainer>
                <Button sx={{
                  bgcolor: colors.info.primary,
                  fontSize: "19px",
                  borderRadius: ' 30px',
                  padding: '10px'
                }} variant="contained" startIcon={<PaidOutlinedIcon sx={{ size: ' 20px' }} />}
                  onClick={handleModal}
                >
                  Realizar Pago
                </Button>

              </ButtonsMenuContainer>
            </Stack>

          </Card>




          <DataGrid
            rows={filteredData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            editable={false} // Deshabilitar la edición
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} lg={4} sx={{ p: 2, display: 'flex', justifyContent: 'center' }}   >

        <PaymentsAside />
      </Grid>

      <FormModal
        onClose={handleModal}
        open={modalOpen}
        title='Proceder con el pago'
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

          <Grid item xs={8} sm={4} md={6}>
            <Select
              title='Buscar cliente'
              search
              //tener pendiente que este es el id
              type='text'
              id='id'
              data={loanData}
              value={formik.values.id}
              onChange={(e) => {
                formik.handleChange(e);

                getDataLoan(e.target.value)
              }}
              onBlur={formik.handleBlur}
              error={
                formik.touched.id && Boolean(formik.errors.id)
              }
              helperText={formik.touched.id && formik.errors.id}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              title='Monto A Pagar '
              type='number'
              id='payment'
              value={formik.values.payment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.payment &&
                Boolean(formik.errors.payment)
              }
              helperText={
                formik.touched.payment &&
                formik.errors.payment
              }
              required
            />
          </Grid>


        </Grid>

        {formik.values.id !== null &&
          <Stack sx={{ width: '100%' }} spacing={2} mb={5}>


            <Alert severity="info" sx={{ display: 'flex', width: '100%', justifyContent: 'center', }}>
              <AlertTitle>Detalles del Pago</AlertTitle>


              <Typography>
                Monto: <strong>{Intl.NumberFormat('en-US',
                  { style: 'currency', currency: 'USD' }
                ).format(dataLoanUnique?.data?.loanPayment)}</strong>
              </Typography>
              <Typography>
                Balance Insoluto:
                <strong>{Intl.NumberFormat('en-US',
                  { style: 'currency', currency: 'USD' }
                ).format(dataLoanUnique?.data?.totalPayment.toFixed(2))}</strong>
              </Typography>
              <Typography>
                Status: Atraso
              </Typography>
            </Alert>
          </Stack>
        }


        <Box component="div" width={{ xs: " 100%", md: "50%", lg: "30%", xl: "30%" }} >
          <Button sx={{
            minHeight: '48px',
            width: '100%',
            borderRadius: '47px',
            color: ' white',
            backgroundColor: (theme) => `${theme.palette.primary.main}!important`
          }} onClick={() => formik.handleSubmit()}
            startIcon={<PaidOutlinedIcon />} >
            Proceder con el pago

          </Button>
        </Box>
      </FormModal>



    </Grid>
  )
}

export default Payments
