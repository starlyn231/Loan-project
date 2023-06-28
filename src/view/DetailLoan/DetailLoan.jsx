import { useEffect, useLayoutEffect, useState } from 'react';
//MUI IMPORT
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
//import { sentenceCase } from 'change-case';
import { SmallHeightDivider, boxShadowConfig } from '../../themes/Styles';
import { tokens } from "../../themes/theme";
import Header from "../Home/components/Header";
//MUI IMPORT
import {
  Box,
  Button, Card,
  Grid,
  Stack,
  Typography,
  useTheme,
  CardHeader,
  Avatar
} from '@mui/material';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { useQuery, useQueryClient } from 'react-query';
import { getLoanById } from '../../callApi/Loan';
import Scrollbar from '../../components/scrollbar/Scrollbar';
import { useNavigate, useParams } from 'react-router-dom';
import { SubtitleText, TextContent } from './styles/DetailLoanStyles';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Link } from '@mui/material';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
const DetailLoan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [CustomerData, setCustomerData] = useState([]);
  const colors = tokens;
  const { id } = useParams();


  const { data: dataLoan, loadingLoan, errorLoan } = useQuery(
    ["dataLoan", id],
    () => getLoanById(id)
  )

  const navigation = useNavigate();

  const [monthlyPayment, setMonthlyPayment] = useState(0);


  useLayoutEffect(() => {


  },
    [dataLoan]
  )





  if (loadingLoan || errorLoan) return <div>Cargando...</div>;
  //    color: colors.grey[100],
  return (
    <Box mt="10px">

      <Card
        sx={{
          display: 'flex',
          py: 5,
          boxShadow: boxShadowConfig,
          textAlign: 'center',
          direction: "row",
          justifyContent: 'center'
        }}   >

        <Avatar alt={'name'} src="/assets/images/avatars/avatar_1.jpg"
          sx={{ width: 78, height: 80 }} />

        <Grid
          alignItems='center'
          container
          direction='row'
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >

          <Grid item xs={12} sm={12} md={12}>
            <Stack direction="row" justifyContent='space-between'
              ml={2} mr={2} >
              <Stack>
                <Typography
                  variant="h2"
                  color={colors.primary[900]}
                  fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                >
                  {dataLoan?.data?.nameClient}
                </Typography>

                <Typography
                  variant="p"
                  color={colors.primary[900]}
                //fontWeight="bold"

                >
                  Ced.: {dataLoan?.data?.cedula}
                </Typography>


              </Stack>

              <Button sx={{
                bgcolor: colors.info.light,
                fontSize: "14px",


                minHeight: '40px', borderRadius: ' 37px'
              }} variant="contained" startIcon={<PortraitOutlinedIcon />}
                onClick={() => navigation(`/setting`)}
              >
                VER PERFIL DE ESTE CLIENTE
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>


      <Grid alignItems='center'
        container
        direction='row'
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 6, sm: 8, md: 12 }}>
        <Grid item xs={12} md={8} lg={6}     >
          <Card
            sx={{
              display: 'flex',
              py: 5,
              // boxShadow: boxShadowConfig,
              textAlign: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: ' center'

            }}   >
            <Grid alignItems='center'
              container


              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 8, md: 12 }}>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Numeracion del prestamo  </TextContent>
                <SubtitleText> {dataLoan?.data?.id} </SubtitleText>
              </Grid>
              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Monto solicitado:  </TextContent>
                <SubtitleText>
                  {
                    Intl.NumberFormat('en-US',
                      { style: 'currency', currency: 'USD' }
                    ).format(dataLoan?.data?.amount)
                  }
                </SubtitleText>

              </Grid>
              <Grid item xs={12} md={6} lg={6}     >
                <TextContent>  Cuota mensual:  </TextContent>
                <SubtitleText>
                  {
                    Intl.NumberFormat('en-US',
                      { style: 'currency', currency: 'USD' }
                    ).format(dataLoan?.data?.loanPayment)
                  }
                </SubtitleText>
              </Grid>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Cantidad de Cuotas:  </TextContent>
                <SubtitleText> {dataLoan?.data?.time}  </SubtitleText>
              </Grid>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Tasa de interés:  </TextContent>
                <SubtitleText> {dataLoan?.data?.interestRate} </SubtitleText>
              </Grid>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent>Balance insoluto </TextContent>
                <SubtitleText>10,000</SubtitleText>
              </Grid>


              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Estado:  </TextContent>
                <SubtitleText> {dataLoan?.data?.status} </SubtitleText>
              </Grid>
              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Detalles:  </TextContent>
                <SubtitleText> {dataLoan?.data?.motiveLoan} </SubtitleText>
              </Grid>


              <Grid item xs={12} md={6} lg={6}     >
                <TextContent>  Último pago en :  </TextContent>
               {/*    <SubtitleText>    {format(
                  new Date(dataLoan?.data?.dueDate.replace(" ", "T")),
                  "dd 'de' MMMM yyyy",
                  { locale: es }
               )}</SubtitleText>  */}
              </Grid>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent> Fecha de apertura:  </TextContent>
              {/*   <SubtitleText>    {format(
                  new Date(dataLoan?.data?.created_at.replace(" ", "T")),
                  "dd 'de' MMMM yyyy",
                  { locale: es }
                )}
                </SubtitleText> */}
              </Grid>


              <Grid item xs={12} md={6} lg={6}     >
                <TextContent>Cuotas en Atrasos </TextContent>
                <SubtitleText>0</SubtitleText>
              </Grid>

              <Grid item xs={12} md={6} lg={6}     >
                <TextContent>Monto Pendiente </TextContent>
                <SubtitleText>{dataLoan?.data?.loanPaymentMonth} </SubtitleText>
              </Grid>

            </Grid>
          </Card>


        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Card
            sx={{
              display: 'flex',
              py: 5,
              boxShadow: boxShadowConfig,
              textAlign: 'center',
              direction: "row",
              justifyContent: 'center'
            }}   >

            <Box mb="30px">
              <Typography
                variant="h2"
                color={colors.primary[900]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
              >
                Accesos Rapidos
              </Typography>


              <Typography
                onClick={() => navigation(`/Payments`)}
                variant="h5" color={colors.grey[600]}
                sx={{
                  m: "0 0 10px 0", cursor: 'pointer',
                  '&:hover': {
                    outline: 'underline',
                    color: 'primary'
                  }
                }}>
                Realizar pago realizados
              </Typography>

              <Typography variant="h5"
                sx={{ m: "0 0 10px 0" }} color={colors.grey[600]}>
                Beneficiarios Inscritos
              </Typography>
              <Typography variant="h5"
                sx={{ m: "0 0 10px 0" }} color={colors.grey[600]}>
                Beneficiarios
              </Typography>
              <Typography variant="h5"
                sx={{ m: "0 0 10px 0" }} color={colors.grey[600]}>
                Mi perfil y ajustes
              </Typography>
              <Typography variant="h5"
                sx={{ m: "0 0 10px 0" }} color={colors.grey[600]}>
                Servicios
              </Typography>
            </Box>

          </Card>
        </Grid>


      </Grid>


    </Box>
  )
}

export default DetailLoan
