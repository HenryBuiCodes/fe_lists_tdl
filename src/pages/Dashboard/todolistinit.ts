import { useNavigate } from "react-router-dom"


const todoListinit = () => {
    const navigate = useNavigate()
    
    return [
        {
            title: 'React - Django',
            css: '',
            des: '',
            navigate: () => {
                navigate('/django_rest')
            }
        },
        {
            title: 'React',
            css: '',
            des: '',
            navigate: () => navigate('/s')
        },
        {
            title: 'React',
            css: '',
            des: '',
            navigate: () => navigate('/c')
        }
]}
export default todoListinit