import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import GlobalCSS from '/src/GlobalCSS'
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/mauve.css';
import '@radix-ui/colors/violet.css';


const PopoverTag = () => (
  <Popover.Root>
    <GlobalCSS />
    <Popover.Trigger asChild>
      <IconButton className="IconButton" aria-label="Update dimensions">

        <img className='DP' src='/src/Components/Icons/UserDP.svg' alt='' />
        <div className="Names"><h3>Demo Name <img className='lock' src='/src/Components/Icons/Lock.svg' /></h3> <p>@DemoUsername0011</p></div>
        <img src='/src/Components/Icons/More.svg' alt="" />

      </IconButton>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className='PopoverContent' sideOffset={5}>
        <div className="optContainer">
          <div className="opt"><p>Add an existing account</p></div>
          <div className="opt"><p>Log out @DemoUsername0011</p></div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

const IconButton = styled.button`
   font-family: inherit;
   border-radius: 80px;
   height: 65px;
   width: 100%;
   margin: 35px 0px 0px -20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 0px;
   background-color: white;
   &:focus{
     box-shadow: 0 0 0 2px rgb(138, 138, 138);
   }
   &:hover{
    background-color: #f1f1f1;
    cursor: pointer;
    }
    .DP{
        width: 45px;
        height: 45px;
        margin: 0px 10px 0px 20px;
    }
    .Names{
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3{
            display: flex;
            margin: 0px;
            font-size: 18px;
            font-family: "Roboto Slab", serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
        }
        p{
            margin: 0px;
            font-size: 14px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            color: #565656;
        }
        .lock{
            margin: 0px 0px 0px 5px;
            width: 20px;
            height: 20px;
        }
    }
    img{
    text-align: center;
    margin: 0px 0px -4px 10px;
    width: 22px;
    height: 22px;
  }
 `

export default PopoverTag;
