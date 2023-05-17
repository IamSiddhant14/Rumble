import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const GOOGLE_API_KEY = "AIzaSyC6kHjMyXPylbJdRXuRB6AWmzwZqyTmNNw"

export const RELATED_VIDEO_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" + GOOGLE_API_KEY ;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+ GOOGLE_API_KEY  ;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" ;

export const YOUTUBE_VIDEO_FOR_SEARCH_TERM = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&maxResults=50&key=' + GOOGLE_API_KEY ;

export const CHAT_OOFSET = 25 ;


export const categories = [
    { name: 'New', icon: <HomeIcon />, },
    { name: 'T-Series', icon: <MusicNoteIcon /> },
    { name: 'Music', icon: <MusicNoteIcon /> },
    { name: 'Education', icon: <SchoolIcon />, },
    { name: 'Podcast', icon: <GraphicEqIcon />, },
    { name: 'Movie', icon: <OndemandVideoIcon />, },
    { name: 'Gaming', icon: <SportsEsportsIcon />, },
    { name: 'Live', icon: <LiveTvIcon />, },
    { name: 'Sport', icon: <FitnessCenterIcon />, },
    { name: 'Fashion', icon: <CheckroomIcon />, },
    { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
    { name: 'Comedy', icon: <TheaterComedyIcon />, },
    { name: 'Gym', icon: <FitnessCenterIcon />, },
    { name: 'Crypto', icon: <DeveloperModeIcon />, },
  ];

