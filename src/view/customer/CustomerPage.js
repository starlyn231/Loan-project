import { Box, Button, Grid } from '@mui/material';
import { useFormik } from "formik";
import React, { useEffect, useState } from 'react';
import LogoDark from '../../assets/image/logo-dark.svg';
import FormModal from '../../components/FormModal/FormModal';
import TableComponent from '../../components/Table/TableComponent';
import TextField from '../../components/TextField/TextField';
import { SmallHeightDivider } from '../../themes/Styles';
import { SchemaCustomer } from './Schema';
const CustomerPage = () => {
  const formik = useFormik({
    initialValues: {
      // TO DO COMPLETE FORM INFORMATION
      name: '',
      lastName: "",
      job: "",
      salary: "",
      address: "",
      province: "",
      country: "",
      sector: "",
      phone: "",
      email: ""

    },
    validationSchema: SchemaCustomer,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleAddCustomer(values);
    },
  });
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    //  formikPasswordChange.resetForm();
    setOpenModal(!openModal);
  };



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
      email: formData.email
    };
 handleModal();
   const objetoJSON = JSON.stringify(requestCustomer);
   // console.log(requestCustomer)
    localStorage.setItem("customer", objetoJSON);
  };



  useEffect(() => {
    // Obtener el objeto desde el local storage
    const objetoJSON = localStorage.getItem("customer");
    // Convertir la cadena JSON a objeto
    const objectParse= JSON.parse(objetoJSON);
    //console.log(objectParse)
  
    // Actualizar el estado con el objeto obtenido
   // setObjeto(objetoParseado);
  }, []);
  return (
    <div style={{ margin: '10px' }}>
      <TableComponent onRequestPress={() => handleModal()} />

      <FormModal
        onClose={handleModal}
        open={openModal}
        title='Agregar Cliente Nuevo'
        icon={LogoDark} bodyText='! administrador de eventos de Tveo.'
        btnText='Ir al administrador de eventos'
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
              title='Donde trabaja actualmente'
              type='text'
              id='job'
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
              type='text'
              id='salary'
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
              title='Pais'
              type='text'
              id='country'
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


          <Grid item xs={12} sm={4} md={6}>
            <TextField
              title='Sector'
              type='text'
              id='sector'
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
        <SmallHeightDivider />

        <Box component="div" width={{ xs: " 100%", md: "50%", lg: "30%", xl: "30%" }} >
          <Button sx={{
            minHeight: '38px',
            width: '100%',
            borderRadius: '12px',
            color: ' white',
            backgroundColor: (theme) => `${theme.palette.primary.main}!important`
          }} onClick={() => formik.handleSubmit()}>
            CONFIRMAR
          </Button>
        </Box>

      </FormModal>
    </div>
  )
}

export default CustomerPage
