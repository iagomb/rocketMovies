import styled from "styled-components";


export const Container = styled.li`
    border-radius: 16px;
    background: rgba(255, 133, 155, 0.05);
    padding: 32px;
        > div {
            cursor: pointer;
            
            h2{
                    font-size: 24px;
                    font-weight: 700;
                    color: ${({theme})=> theme.COLORS.WHITE};
                } 

            .stars{
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .paragraph{
                width: 100%;
                height: 50px;

                margin-block: 15px;
                p{
                    height: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    
                    text-overflow: ellipsis;
    
    
                    color: ${({theme})=> theme.COLORS.GRAY_100};
                }
            }
            }
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    span{
        background-color: ${({theme})=> theme.COLORS.TEXTBUTTON};
    }
`;