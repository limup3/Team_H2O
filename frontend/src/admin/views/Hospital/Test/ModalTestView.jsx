import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'

import {
  Card,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Button as MuiButton,
  TablePagination,
  Paper,
  Checkbox
} from '@material-ui/core';
import { Button, Modal, PageItem, Dropdown, DropdownButton} from 'react-bootstrap'
import ModalTestBody from './ModalTestBody';

import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import clsx from 'clsx';
import { lighten } from '@material-ui/core/styles';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';



const tableStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  TablePagination:{
    alignItems: "center"
  },
  color: {
    backgroundColor: "#282c34"
  }
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));


const TablePaginationActions = (props) => {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage, setTablePagination } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

return (
  <div className={classes.root}>
    <IconButton
      onClick={handleFirstPageButtonClick}
      disabled={page === 0}
      aria-label="first page"
    >
      {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
    </IconButton>
    <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    </IconButton>
    <IconButton
      onClick={handleNextButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label="next page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </IconButton>
    <IconButton
      onClick={handleLastPageButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label="last page"
    >
      {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
    </IconButton>
  </div>
);
}

TablePaginationActions.propTypes = {
count: PropTypes.number.isRequired,
onChangePage: PropTypes.func.isRequired,
page: PropTypes.number.isRequired,
rowsPerPage: PropTypes.number.isRequired,
};



const ModalTestView = () => {

  const tableClasses = tableStyles();
  const classes = useStyles()
    const [hospitalData, setHospitalData] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false);

    // --------------Pagination ------------------------
    const [newPageSave, setNewPageSave] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);


    // -------------- Pagination2-----------------
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [dense, setDense] = useState(false);


    useEffect(()=>{
      setLoading(true);
      axios
        .get(`http://localhost:8080/hospital/hospitalList`)
        .then(response => {
          setPosts(response.data)
        })
        .catch(error => {
          alert("서버와의 연결이 되지 않았습니다.");
        })
        setLoading(false);
    }, [])

    const handleClose = () => {
      setShow(false)
    }

    // ----------------- Pagination -----------------------------
    const handleChangePage = (e, newPage) => {
      setPage(newPage);
      setNewPageSave(newPage)
    };
  
    const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(parseInt(e.target.value, 10));
      setPage(0);
    };

    // ----------------- Pagination2 -----------------------------

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = posts.map((n) => n.name);
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
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name) => selected.indexOf(name) !== -1;


    return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer component={Paper}>
          <Table className={tableClasses.table} aria-label="custom pagination table"
          >
            <TableRow>
              <TableCell></TableCell>
              <TableCell componenent="th" align="center" scope="row">No.</TableCell>
              <TableCell align="center">이름</TableCell>
              <TableCell align="center">사업자 번호</TableCell>
              <TableCell align="center">주소</TableCell>
              <TableCell align="center">병원 형태</TableCell>
              <TableCell align="center">의료인 수</TableCell>
              <TableCell align="center">연락처</TableCell>
              <TableCell align="center">위도</TableCell>
              <TableCell align="center">경도</TableCell>
              <TableCell align="center">영업상태</TableCell>

              

            </TableRow>

              <TableBody>

                {/* -------------pagination----------------- */}

                  {(rowsPerPage > 0
                    ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : posts
                    ).map((hospital, i) => {
                      const isItemSelected = isSelected(posts.name);
                      const labelId = `enhanced-table-checkbox-${i}`;

                  return (
                  <TableRow
                    align="center"
                    key={i}
                    onClick={()=>setHospitalData(hospital)}
                  >
                    <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </TableCell>
                    <TableCell align="center">{hospital.hospitalNo}</TableCell>
                    <TableCell align="center">
                      <MuiButton variant="light" onClick={()=>setShow(true)}
                      >{hospital.hospitalName}
                      </MuiButton>
                    </TableCell>
                    
                    <TableCell align="center">{hospital.businessLicenseNumber}</TableCell>
                    <TableCell align="center">{hospital.addr}</TableCell>
                    <TableCell align="center">{hospital.hospitalType}</TableCell>
                    <TableCell align="center">{hospital.medicalPeople}</TableCell>
                    <TableCell align="center">{hospital.tel}</TableCell>
                    <TableCell align="center">{hospital.latitude}</TableCell>
                    <TableCell align="center">{hospital.longitude}</TableCell>
                    <TableCell align="center">{hospital.businessStatus}</TableCell>
                    
                  </TableRow>
                    )})}
                {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
              </TableBody>


              {/* ---------------------- Pagination ----------------------------------- */}

              <TableFooter>
              <TableRow>
                <TablePagination
                  classesName ={tableClasses.TablePagination}
                  rowsPerPageOptions={[10, 50, 100, { label: 'All', value: -1 }]}
                  component="div"
                  colSpan={7}
                  count={posts.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
            
            {/* ---------------------- Pagination ----------------------------------- */}

                        
              {hospitalData.hospitalName? (
                <Modal 
                  show={show} 
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  scrollable={Boolean(true)}
                  >
                <Modal.Header closeButton>
                  <Modal.Title>등록 병원 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ModalTestBody 
                    hospitalData={hospitalData} 
                    setClose={(close)=>{setShow(close)}}
                    />
                  </Modal.Body>
              </Modal>):null}
          </Table>
        </TableContainer>

        </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
    )
}



export default ModalTestView
