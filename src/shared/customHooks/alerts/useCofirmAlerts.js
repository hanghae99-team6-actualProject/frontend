import Swal from 'sweetalert2'

const useConfirmAlert = (title, buttonDesc, effect) => {
    Swal.fire({
        text: title,
        showCancelButton: true,
        confirmButtonColor: '#6B76FF',
        cancelButtonColor: '#DEDEDE',
        confirmButtonText: buttonDesc,
        cancelButtonText: '취소',
        width: '30rem',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            {
                effect()
            }
        }
    })
}

export default useConfirmAlert
