import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {useSelector, useDispatch} from "react-redux";
import {deleteData} from "../reducers/data/dataSlice.jsx";
import {llenarCampos} from "../reducers/edit/editSlice.jsx";
import {onModal1,onModal2} from "../reducers/modal/modalSlice.jsx";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  width: '70%',
  height:'80vh',
  bgcolor: '#ccffff',
  p: 4,
  borderRadius: 2,
  mt: 2,
  overflow: 'auto'
};

const style2 = {
  width: '100%',
  bgcolor: '#ccffcc',
  boxSizing:'border-box',
  p: 4,
  borderRadius: 2,
  mt: 2,
  
};
const style3 = {
  width: '100%',
  bgcolor: '#ccffcc',
  boxSizing:'border-box',
  p: 4,
  borderRadius: 2,
  mt: 2,
  color:'#ff00ff'
};



export function Lista() {
  
  const data = useSelector((state)=>state.data)
  const dispatch= useDispatch()
// const {erase}=useCustomErase()

// const {editar}=useCustomEditar()
// const {modo1}=useCustomModal1()
// const {modo2}=useCustomModal2()

// handleModify{

// }



  return (
    
  <Box sx={style}>

    <Button onClick={()=>dispatch(onModal1({
            modal1:true,
            modal2:false,
            }))} sx={{borderColor:'#ff00ff',color:'#ff00ff',mb:2}} variant="outlined" endIcon={<BookmarkAddIcon />}>
    Agregar Evento
    </Button>
    <Box key={data.id} sx={style3}>
    <Typography id="modal-modal-title" variant="h5" component="h2">
    Lista de eventos
    </Typography>
    </Box>
    {data.map(data=>{
      return (
    <Box key={data.id} sx={style2}>
    <Typography id="modal-modal-title" variant="h5" component="h2">
    {data.nombre}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    {data.hora}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    {data.ubicacion}
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    {data.descripcion}
    </Typography>
    <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
        <Button  onClick={()=>dispatch(deleteData(data.id))} sx={{borderColor:'#ff00ff',color:'#ff00ff'}} variant="outlined" endIcon={<DeleteOutlineIcon />}>
        Eliminar
        </Button>
        <Button onClick={()=>{
          dispatch(onModal2({
            modal1:false,
            modal2:true,
            }));
          dispatch(llenarCampos(data))}} sx={{borderColor:'#ff00ff',color:'#ff00ff'}} variant="outlined" endIcon={<EditIcon />}>
        Editar 
        </Button>
        </Stack>
    </Box>
  )})}
  
  </Box>
  )
}

