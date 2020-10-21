import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { List, Avatar, Row } from 'antd';
import Nav from './Nav'
import { connect } from 'react-redux';

function ScreenSource(props) {

  const [sourceList, setSourceList] = useState([])
  //Façon de faire avec des states
  //const [language, setLanguage] = useState('fr');
  //const [country, setCountry] = useState('fr');

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  useEffect(() => {
    const APIResultsLoading = async() => {
      const data = await fetch(`https://newsapi.org/v2/sources?&country=${props.userLangue}&apiKey=689f0138902347209494dce29c320602`)
      const body = await data.json()
      setSourceList(body.sources)
    }
    console.log("maprop", props.userLangue)
    APIResultsLoading()
  }, [props.userLangue])

  // Façon de faire avec des states
  // function changeLangAndCountry(val) {
  //   if(val==='fr') {
  //     setLanguage('fr');
  //     setCountry('fr');
  //   } else if(val==='en') {
  //     setLanguage('en');
  //     setCountry('gb');
  //   }
  // }
  return (
    <div>
        <Nav/>
       
       <div className="Banner"><Row className="rowPerso"><Avatar onClick={()=>props.onSetCountryClick('fr')} src={"/images/flag_fr.png"} /><Avatar onClick={()=>props.onSetCountryClick('gb')} src={"/images/flag_uk.png"} /></Row></div>

       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={source => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={`/images/${source.category}.png`} />}
                        title={<Link to={`/screenarticlesbysource/${source.id}`}>{source.name}</Link>}
                        description={source.description}
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}
function mapStateToProps(state){
  return{
    userLangue: state.userLang
  }
}
function mapDispatchToProps(dispatch){
  return {
    onSetCountryClick: function(lang) {
      dispatch({type: 'changelang', lang})
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenSource);

//export default ScreenSource;
