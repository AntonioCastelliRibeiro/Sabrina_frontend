import React, { useEffect } from 'react';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { CircularProgressComp, ContainerImg, IconButtonComp, IconButtonComp2, ImgComp } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import IMyModal from './interface';

export default function MyModal(props: IMyModal) {
    const navigate = useNavigate();
    const { id } = useParams();
    const image = getImageById(Number(id));
    const [onLoadImg, setLoadImg] = React.useState(true);
    
    const [onCopy, setCopy] = React.useState(false);
    useEffect(()=>{
        setTimeout(() => {
            if (onCopy) {
                setCopy(false);
            }
        }, 2000);
    }, [onCopy]);


    const handleClose = () => navigate(props.pathname);

    useEffect(()=>{
        if (image === undefined) {
            navigate(props.pathname);
        }
    }, []);

    function getImageById(id: number) {
        return props.data.find(image => image.id === id);
      }

    function copyLink(){        
        const text = window.location.href;
        navigator.clipboard.writeText(text).then(()=>{setCopy(true)}     
        );
    }
    
    return (
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <ContainerImg>
                    {onLoadImg ? <CircularProgressComp /> : false}
                    <IconButtonComp onClick={handleClose}><CloseIcon /></IconButtonComp>
                    <IconButtonComp2 onClick={()=> copyLink()}> {onCopy ? <CheckIcon /> : <ContentCopyIcon /> }</IconButtonComp2>
                    <ImgComp onLoad={()=>setLoadImg(false)} src={image?.img} alt={"imgModal"} />
                </ContainerImg>
            </Modal>
    );
}
