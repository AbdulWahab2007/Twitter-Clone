import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import './styles.css';

const Popover = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="IconButton" aria-label="Update dimensions">

      <ProfileOpts><img className='DP' src='./public/UserDP.svg' alt=''/>
                    <div className="Names"><h3>Demo Name <img className='lock' src='./public/Lock.svg'/></h3> <p>@DemoUsername0011</p></div>
                    <img src='./public/More.svg' alt="" /></ProfileOpts>

      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div className="optContainer">
        <div className="opt"><p>Add an existing account</p></div>
        <div className="opt"><p>Log out @DemoUsername0011</p></div>
        </div>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

const ProfileOpts = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 65px;
    width: 100%;
    border-radius: 80px;
    margin: 0px;
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

export default Popover;
