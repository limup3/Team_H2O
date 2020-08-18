import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import ImgButton, { imgSrc } from '../../../../helpers/ImgButton';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const UserAdd = () => {
  const classes = useStyles();
  const [hospitalName, setHospitalName] = useState("");
  const [businessLicenseNumber, setBusinessLicenseNumber] = useState("");
  const [logo, setLogo] = useState("");
  const [addr, setAddr] = useState("");
  const [hospitalType, setHospitalType] = useState("")
  const [medicalPerson, setMedicalPerson] = useState("")
  const [tel, setTel] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [hospitalIdChecker, setHospitalIdChecker] = useState("")

  //---------------- input -------------
  const [image, setImage] = useState(null) 
  //---------------- input -------------

  const history = useHistory();

  const handleIdCheck = e => {
    setHospitalIdChecker("")
    if(businessLicenseNumber){
    e.preventDefault();
    axios
      .get(`http://localhost:8080/hospitals/BusinessLicenseCheck/${businessLicenseNumber}`)
      .then(response => {
        alert("이미 등록된 병원입니다.");
        setHospitalIdChecker("unavailable")
      })
      .catch(error => {
        alert("등록 가능합니다.");
        setHospitalIdChecker("available")
      })
    }else{
      alert("등록 여부를 확인하세요.")
    }
  }
  //---------------- input -------------
  const handleInputChange = e =>{
    setImage(e.target.files[0])
  }
  const handleInpuLogo = async() => {
    const formData = new FormData()
    formData.append('file', image)
    const res = await axios.post("/hospitals/logoUpload", formData)

  }
  //---------------- input -------------

  const handleSubmit = e => {
    if(hospitalName){
    e.preventDefault();
    setHospitalIdChecker("")
    const userJson = {
      hospitalName: hospitalName,
      businessLicenseNumber: businessLicenseNumber,
      logo: logo,
      addr: addr,
      hospitalType: hospitalType,
      medicalPerson: medicalPerson,
      tel: tel,
      latitude: latitude,
      longitude: longitude
    }
    if(hospitalIdChecker==="available"){
      axios.post(`http://localhost:8080/hospitals/hospitalAdd`, userJson)
        .then(response => {
          alert("병원 등록 성공 !")
          history.push("/admin/hospital")
            }
        ).catch(
          
        error => { 
          alert("병원 등록 실패")
          throw (error) 
        }
    );
    }else if(hospitalIdChecker==="unavailable"){
      alert("이미 등록된 병원입니다.")
    }else{
      alert("등록여부를 확인해주세요.")
    }
  }else{
    alert("입력되지 않은 정보가 있습니다.")
  }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h2" variant="h5">
          병원 등록
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
          <Grid item xs={8}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="businessLicenseNumber"
                  label="병원 사업자 등록번호"
                  name="businessLicenseNumber"
                  autoComplete="businessLicenseNumber"
                  value={businessLicenseNumber || ''}
                  onChange={e => setBusinessLicenseNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="flex-end"
            >
              <Button variant="outlined" color="secondary" onClick={handleIdCheck}>
                사업자 번호 중복 확인
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="hospitalName"
                  label="병원 이름"
                  name="hospitalName"
                  autoComplete="hospitalName"
                  value={hospitalName || ''}
                  onChange={e => setHospitalName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="addr"
                name="addr"
                variant="outlined"
                required
                fullWidth
                id="addr"
                label="병원 주소"
                autoFocus
                value={addr}
                onChange={e => setAddr(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="hospitalType"
                label="병원 형태"
                name="hospitalType"
                autoComplete="hospitalType"
                value={hospitalType}
                onChange={e => setHospitalType(e.target.value)}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              id="medicalPerson"
              label="병원 근무자 수"
              name="medicalPerson"
              autoComplete="medicalPerson"
              value={medicalPerson}
              onChange={e => setMedicalPerson(e.target.value)}
            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="tel"
                label="연락처"
                name="tel"
                autoComplete="tel"
                value={tel}
                onChange={e => setTel(e.target.value)}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="latitude"
                label="위도"
                name="latitude"
                autoComplete="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="longitude"
                label="경도"
                name="longitude"
                autoComplete="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
              </Grid>
               {/* <Grid item xs={8}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="logo"
                  label="로고"
                  name="logo"
                  autoComplete="logo"
                  value={logo}
                  onChange={e => setLogo(e.target.value)}
              />
              </Grid> */}
              <ImgButton />
            </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            등록하기
          </Button>
         
        </form>
      </div>
    </Container>
  );
}
export default UserAdd