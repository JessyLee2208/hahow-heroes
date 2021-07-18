import toast from 'react-hot-toast';

const toastStyle = {
  borderRadius: '4px',
  background: '#333',
  color: '#fff'
};

const upLoadSuccessnNotify = () =>
  toast('儲存成功', {
    style: toastStyle
  });

export { upLoadSuccessnNotify };
