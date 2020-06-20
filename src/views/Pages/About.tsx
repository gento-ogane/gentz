import * as React from "react";
import styled from "styled-components";
import TitleText from "../atoms/TitleText";
import Avatar from "../../utils/avatar.jpg";
import Chip from '@material-ui/core/Chip';
import {headerHeightNum} from "../../utils/size";

const About: React.FC = (props) => {
  return (
    <Wrap>
      <TitleText variant="h5">About</TitleText>
      <TitleText variant="h6">profile</TitleText>
      <Img src={Avatar} alt="avatar" />
      <Table>
        <Tbody>
          <tr>
            <Td>Name</Td>
            <td>Gento Ogane</td>
          </tr>
          <tr>
            <Td>Birth</Td>
            <td>1998.11.24</td>
          </tr>
          <tr>
            <Td>University</Td>
            <td>Sophia Unitversity</td>
          </tr>
          <tr>
            <Td>Major</Td>
            <td>Information Science</td>
          </tr>
          <tr>
            <Td>Interesting</Td>
            <td>Web Application</td>
          </tr>
        </Tbody>
      </Table>
      <TitleText variant="h6">history</TitleText>
      <TitleText variant="h6">skills</TitleText>
      {/* <Tooltip title="Lebel3"><Button>HTML</Button></Tooltip> */}
      <p>★★★</p>
      <RowThree>
      <SkillChip label="React"/>
      <SkillChip label="Unity(C#)" />
      <SkillChip label="Amplify" />
      <SkillChip label="HTML" />
      <SkillChip label="CSS" />
      </RowThree>
      <p>★★</p>
      <RowTwo>
      <SkillChip label="Python" />
      <SkillChip label="GAS" />
      <SkillChip label="Git/GitHub" />
      <SkillChip label="jQuery" />
      <SkillChip label="TypeScript" />
      </RowTwo>
      <p>★</p>
      <RowOne>
      <SkillChip label="Flutter" />
      <SkillChip label="Docker" />
      <SkillChip label="AWS" />
      <SkillChip label="Ruby on Rails" />
      <SkillChip label="WordPress" />
      </RowOne>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top:${headerHeightNum+"px"};
  width: 100%;
  text-align: center;
  padding-bottom:100px;
`;
const Img = styled.img`
  width: 200px;
  margin: 10px;
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
`;

const Tbody = styled.tbody`
  width: 320px;
`;

const Td = styled.td`
  width: 52%;
  text-align: left;
  padding: 10px;
`;

const RowThree=styled.div`
  display:flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap; 
  width: 30%;
  margin:auto;
`
const RowTwo=styled.div`
  display:flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap; 
  width: 30%;
  margin:auto;
`
const RowOne=styled.div`
  display:flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap; 
  width: 30%;
  margin:auto;
`

const SkillChip =styled(Chip)`
margin:10px;
`


export default About;
