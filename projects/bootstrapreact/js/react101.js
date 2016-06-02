/**
 * Created by boochoo on 30/05/16.
 */
//NavBar component

var Navbar = React.createClass({
    propTypes : {
        brand: React.PropTypes.string.isRequired
    },
    getDefaultProps : function(){
        return {
            brand : 'Bootsrap with React ',
            color : 'light'
        }
    },
    render : function(){

        if (this.props.color == 'dark'){
            var navClass = 'navbar navbar-inverse';
        }else {
            var navClass = 'navbar navbar-default'
        }

        var homeActive = '';
        var aboutActive = '';

        if (this.props.page == 'home'){
            homeActive = 'active';
        } else if(this.props.page == 'about'){
            aboutActive = 'active';
        }
        return (
            <div>
                <nav className={navClass}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">{this.props.brand}</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={homeActive}><a onClick={this.props.homeClick} href="#">Home</a></li>
                                <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});

//Jumbotron Component

var Jumbotron = React.createClass({
    PropTypes : {
        heading : React.PropTypes.string,
        text : React.PropTypes.string,
        link : React.PropTypes.string
    },
    getDefaultProps : function(){
      return {
          heading : 'Welcome',
          text : 'Allow me to welcome you all to my humble trial by combat programming sessions',
          link : 'http://boochoo.github.io/'
      }
    },
    render : function(){
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p><a className="btn btn-primary btn-lg" href={this.props.link}  role="button">Know me better &raquo;</a></p>
                </div>
            </div>
        )
    }
});

// PageHome Component
var PageHome = React.createClass({
    render : function(){
        return (
            <div className="container">
                <div className="row">
                    <h2 className="page-header">Welcome</h2>
                    <p>Some home cooked contents... </p>
                </div>
            </div>
        )
    }
});

// PageAbout component

var PageAbout = React.createClass({
   render : function(){
       return (
           <div className="container">
               <div className="row">
                   <h2 className="page-header">About Us</h2>
                   <p>Some info contents... </p>
               </div>
           </div>
       )
   }
});

// Footer component
var Footer = React.createClass({
    getDefaultProps : function(){
        return {
            website : 'ReactJS is Awesome, Inc.',
            copy_year : 2016
        }
    },
    render : function(){
        return (
          <div className ="container">
              <hr/>
              <footer>
                  <p>&copy; {this.props.copy_year } {this.props.website} </p>
              </footer>
          </div>
        )
    }
})

// Main App component
var App = React.createClass({
    getInitialState : function(){
      return {
          page : 'home'
      }
    },
    handleHomeClick : function () {
      this.setState({
          page : 'home'
      })
    },
    handleAboutClick : function () {
        this.setState({
            page : 'about'
        })
    },
    render : function(){
        if(this.state.page == 'home'){
            var jumbotron  = <Jumbotron />
            var page = <PageHome />
        }else if (this.state.page == 'about'){
            var jumbotron = '';
            var page = <PageAbout />

        }
        return(
                <div>
                    <Navbar
                        color="dark"
                        page={this.state.page}
                        homeClick={this.handleHomeClick}
                        aboutClick={this.handleAboutClick}
                        />
                    {jumbotron}
                    {page}
                    <Footer />
                </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);