import { useEffect, useState } from 'react';
//MUI IMPORT
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import FormModal from '../../components/FormModal/FormModal';
import TextField from '../../components/TextField/TextField';
import { SmallHeightDivider } from '../../themes/Styles';
import { tokens } from "../../themes/theme";
import Header from "../Home/components/Header";
//MUI IMPORT
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import { useFormik } from 'formik';
import { SchemaLoan } from './Schema';

import LogoDark from '../../assets/image/logo-dark.svg';
import { getCustomerById, getCustomers } from '../../callApi/Customer';
import { getLoans } from '../../callApi/Loan';
import { useQuery } from 'react-query';
import Select from '../../components/Select/Select';
import AxiosHandler from '../../requestManager/AxiosHandler';
const LoanPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [CustomerData, setCustomerData] = useState([]);
  const [CustomerId, setCustomerId] = useState(null);
  const theme = useTheme();
  const colors = tokens;

  /* const { data: listCustomers, isLoading, isError } = useQuery(
     ["listCustomers"],
     () => getCustomers()
   );
 */
  const { data: listLoans, isLoadingLoan, isErrorLoan } = useQuery(
    ["listLoans"],
    () => getLoans()
  )
  /*
   
    const { data: customer,loadingCustomer , refetch} = useQuery(
      ["customer", CustomerId], () => getCustomerById(CustomerId),{
      enabled:   false,
      }
       
      
    );
   
  console.log(customer?.data)
  */
  const formik = useFormik({
    initialValues: {
      name: '',
      // lastName: "",
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
      name: formData.name,
      lastName: formData.lastName,
      job: formData.job,
      salary: formData.salary,
      address: formData.address,
      province: formData.province,
      country: formData.country,
      sector: formData.sector,
      phone: formData.phone,
      cedula: formData.cedula
    };

  }


  const handleAddLoan = async (formData) => {
    console.log(formData)
    const request = {
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

  }

  const getDataCustomer = async (id) => {
    try {
      let listCustomers = await AxiosHandler().get(`/customers/`)
      console.log(listCustomers.data.success)
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
    // set value of  formik field 
      formik.setFieldValue('cedula', customerData?.data?.data?.cedula);
      formik.setFieldValue('job', customerData?.data?.data?.job);
      formik.setFieldValue('salary', customerData?.data?.data?.salary);

   }

  }


  //};



  useEffect(() => {

    getDataCustomer();

  }, []);
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


        <Grid item xs={12} sm={4} md={8}>

          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <p>hola</p>
            </Box>
          </Box>
          <Box height="250px" >
            <p>hola</p>
          </Box>

        </Grid>

      </Grid>


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
              type='text'
              id='name'
              data={CustomerData}
              value={formik.values.name}
              onChange={(e) => {
                formik.handleChange(e);
                getDataCustomer(e.target.value);

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
