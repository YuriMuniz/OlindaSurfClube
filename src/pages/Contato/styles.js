import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top:20px;

`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
   
    width: 80vw;
    height: 58vh;
    border:1px solid #fff;
    padding: 10px;
`;

export const Title  = styled.div`
    font-size: 24px;
    color: #fff;
    width: 80vw
    padding: 0px 0px 5px 0px;
    border-bottom: 1px solid #eee;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        color: #313131;
        font-size: 14px;
        background: #fff ;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 5px;
        
    }

    @media(max-width: 768px){
        a{
            display: none;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    font-size: 32px;
    color: #fff; 
    align-items: center; 
    padding: 10px 5px;
    
    span{
        margin-left: 10px;
        width:20px;
    }
    svg{
        font-size: 32px;
        color: #fff;
    }

    @media(max-width:768px){
        font-size: 14px;
        svg{
        font-size: 18px;
        color: #fff;
    }
    }

`;