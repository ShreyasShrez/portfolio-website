import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiAndroid, DiAtlassian, DiAws, DiBingSmall, DiCloud9, DiCompass, DiCssdeck, DiDart, DiDebian, DiDocker, DiFirefox, DiHackernews, DiJenkins, DiKrakenjsBadge, DiLinux, DiOpenshift, DiOpensource, DiRackspace, DiRust, DiSafari, DiSass, DiScala, DiSenchatouch, DiSmashingMagazine, DiSpark, DiStackoverflow, DiSublime, DiSwift, DiTerminal, DiTerminalBadge, DiTrello } from 'react-icons/di';
import { FaAngleDoubleRight, FaBars, FaThermometerHalf } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Animation, AnimationTwoTone, ArrowForward, ArrowLeft, AspectRatio, ChromeReaderMode, Close, CloseRounded, Computer, Coronavirus, CropDin, DataArrayOutlined, DeveloperMode, DeveloperModeSharp, DeveloperModeTwoTone, Discount, EmergencyRecording, KeyboardArrowLeft, KeyboardDoubleArrowDownRounded, KeyboardDoubleArrowLeftOutlined, KeyboardDoubleArrowLeftTwoTone, KeyboardDoubleArrowRight, MilitaryTechRounded, TempleHinduRounded, Terminal, TerminalSharp, TypeSpecimenSharp, ZoomInSharp } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { MonthPicker } from '@mui/lab';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "#7371fc", marginBottom: '20;', cursor: 'pointer' }}>
            <DiSmashingMagazine size="4rem"/>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Certificates</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar