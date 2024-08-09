import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import { useStateValue } from './StateProvider';


function Sidebar() {
  const [{ user }, dispath] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        Icon={EmojiFlagsOutlinedIcon}
        title="Pages"
      />
      <SidebarRow
        Icon={PeopleIcon}
        title="Friends"
      />
      <SidebarRow
        Icon={ChatBubbleIcon}
        title="Messanger"
      />

      <SidebarRow
        Icon={StorefrontOutlinedIcon}
        title="Marketplace"
      />
      <SidebarRow
        Icon={VideoLibraryIcon}
        title="Videos"
      />
      <SidebarRow
        Icon={ExpandMoreOutlinedIcon}
        title="Marketplace"
      />

    </div>
  )
}

export default Sidebar
