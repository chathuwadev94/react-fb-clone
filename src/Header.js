import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, IconButton } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { useStateValue } from "./StateProvider"

function Header() {

    const [{ user }, dispath] = useStateValue();
    return (
        <div className='header'>

            <div className='header__left'>
                <img
                    src='https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/58978526_10158354585751729_7411073224387067904_n.png?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_ohc=UMOHnV7LBVkQ7kNvgFzncaX&_nc_ht=scontent.fcmb11-1.fna&oh=00_AYCHcmQxYYqEsCequKjYqZEPm-MIIM3Ru2Wyd7sQhmRH7w&oe=66DA4415'
                    alt='' />
                <div className='header__input'>
                    <SearchIcon />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>

            <div className='header__center'>
                <div className='header__options
                 header__options--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <PeopleOutlineOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SportsEsportsOutlinedIcon fontSize='large' />
                </div>
            </div>


            <div className='header__right'>

                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <WhatsAppIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                </div>
            </div>


        </div>
    )
}

export default Header
