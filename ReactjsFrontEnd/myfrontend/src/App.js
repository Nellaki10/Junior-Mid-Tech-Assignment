import Categories from './Categories';
import CategoriesInput from './CategoriesInput';
import Articles from './Articles';
import ArticlesInput from './ArticlesInput';
import UpdatedArticleInput from './UpdatedArticleInput';
import SpecificArticleInput from './SpecificArticleInput';
import ArticlesSD from './ArticlesSelectedDetails';
import ArticlesSDInput from './ArticlesSelectedDetailsInput';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, CssBaseline } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
//import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu/>
          </IconButton>
          <Typography variant="h6" style={{flex:1}}> Junior-Mid Tech Assignment </Typography>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">Articles</Button>
        </Toolbar>
      </AppBar>
    <br></br>
    <h1>&nbsp;&nbsp;&nbsp;Categories</h1>
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}> 
        <header className="App-header">
          <Categories></Categories>
          <CategoriesInput></CategoriesInput>
        </header>
      </Typography>
    </Container>
    <br></br>
    <h1>&nbsp;&nbsp;&nbsp;Articles</h1>
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}> 
        <header className="App-header">
          <Articles></Articles>
          <SpecificArticleInput></SpecificArticleInput>
          <UpdatedArticleInput></UpdatedArticleInput>
          <ArticlesInput></ArticlesInput>
        </header>
      </Typography>
    </Container>
    <br></br>
    <h1>&nbsp;&nbsp;&nbsp;Articles (Selected Details)</h1>
    <Container maxWidth="xl">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }}> 
        <header className="App-header">
          <ArticlesSD></ArticlesSD>
          <ArticlesSDInput></ArticlesSDInput>
        </header>
      </Typography>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    </div>
  </div>
  );
}

export default App;




    

