import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   grid-area: header;
   padding: 24px 123px;
   border-bottom: 2px solid ${({theme})=>theme.COLORS.GRAY_300};
`;

export const Content = styled.div`
   max-width: 1114px;
   margin: 0 auto;
   display: flex;
   gap: 64px;
   justify-content: space-between;
   align-items: center;

   > input{
      width: 100%;
      padding: 19px 24px;

      background: ${({theme})=> theme.COLORS.GRAY_300};
      color: ${({theme})=> theme.COLORS.WHITE};

      border: 0;
      border-radius: 10px;

      font-size: 14px;
      font-weight: 400;
   }
`;

export const Avatar = styled.div`
   display: flex;
   align-items:  center;
   gap: 9px;
   cursor: pointer;

   > div{
      display: flex;
      flex-direction: column;
      align-items: end;

      > strong{
         width: 86px;
         color: ${({theme})=> theme.COLORS.WHITE};

         font-size: 14px;
         font-weight: 700;

         display: inline-flex;
         justify-content: flex-end;
         flex-wrap: nowrap;
      }  
      
      > button{
         font-size: 14px;
         font-weight: 400;

         color: ${({theme})=> theme.COLORS.GRAY_100};
         background: transparent;
         border: none;
         cursor: pointer;
      }
   }

   > img{
      height: 64px;
      width: 64px;
      
      border-radius: 50%;
      object-fit: cover;
   }
`; 
