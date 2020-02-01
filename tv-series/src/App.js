import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
     val : [(<b style={{color : 'black'}}></b>)],
     textres : "",
     backgroundcolor : '',
     status : ''
     }

     this.clickBold    = this.clickBold.bind(this);
     this.clickItalic  = this.clickItalic.bind(this);
     this.handleChange = this.handleChange.bind(this);
     
     this.heading1     = this.heading1.bind(this);
     this.heading2     = this.heading2.bind(this);
     this.heading3     = this.heading3.bind(this);
     this.heading4     = this.heading4.bind(this);
     this.heading5     = this.heading5.bind(this);
     this.heading6     = this.heading6.bind(this);
    
     this.para         = this.para.bind(this);
     this.Center       = this.Center.bind(this);
     this.marquee      = this.marquee.bind(this);
     this.quote        = this.quote.bind(this);
     this.strike       = this.strike.bind(this);
     this.textarea     = this.textarea.bind(this);

     this.clickRed     = this.clickRed.bind(this);
     this.clickBlue    = this.clickBlue.bind(this);
     this.clickGreen   = this.clickGreen.bind(this);
     this.clickYellow  = this.clickYellow.bind(this);
     this.clickOrange  = this.clickOrange.bind(this);
  }

  clickBold()
  {
   
    this.setState({
      val : [(<b style={{color : this.state.backgroundcolor}}>{this.state.textres}</b>)],
      status : 'bold'
    })

  }

  clickItalic()
  {
    this.setState({
      val : [(<i style={{color : this.state.backgroundcolor}}>{this.state.textres}</i>)],
      status : 'italic'
    })
  }

  para()
  {
    this.setState({
      val : [(<p style={{color : this.state.backgroundcolor}}>{this.state.textres}</p>)],
      status : 'para'
    })
  }

  Center()
  {
    this.setState({
      val : [(<center style={{color : this.state.backgroundcolor}}>{this.state.textres}</center>)],
      status : 'center'
    })
  }

  textarea()
  {
    this.setState({
      val : [(<textarea style={{color : this.state.backgroundcolor}}>{this.state.textres}</textarea>)],
      status : 'textarea'
    })
  }

  strike()
  {
    this.setState({
      val : [(<s style={{color : this.state.backgroundcolor}}>{this.state.textres}</s>)],
      status : 'strike'
    })
  }

  quote()
  {
    this.setState({
      val : [(<q style={{color : this.state.backgroundcolor}}>{this.state.textres}</q>)],
      status : 'quote'
    })
  }

  marquee()
  {
    this.setState({
      val : [(<marquee style={{color : this.state.backgroundcolor}}>{this.state.textres}</marquee>)],
      status : 'marquee'
    })
  }

  clickGreen = () =>
  {
    
    if(this.state.status === 'bold')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.clickBold() )
    }
    else if(this.state.status === 'italic'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.clickItalic() )
    }

    else if(this.state.status === 'marquee'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.marquee() )
    }

    else if(this.state.status === 'textarea'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.textarea() )
    }

    else if(this.state.status === 'para'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.para() )
    }

    else if(this.state.status === 'strike'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.strike() )
    }

    else if(this.state.status === 'center'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.Center() )
    }

    else if(this.state.status === 'quote'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.quote() )
    }

    else if(this.state.status === 'h1'){
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading1() )
    }
    else if(this.state.status === 'h2')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading2() )
    }
    else if(this.state.status === 'h3')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading3() )
    }
    else if(this.state.status === 'h4')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading4() )
    }
    else if(this.state.status === 'h5')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading5() )
    }
    else if(this.state.status === 'h6')
    {
      this.setState({
        backgroundcolor : 'green'
      }, () => this.heading6() )
    }

  }


  clickOrange = () =>
  {
    
    if(this.state.status === 'bold')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.clickBold() )
    }
    else if(this.state.status === 'italic'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.clickItalic() )
    }

    else if(this.state.status === 'marquee'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.marquee() )
    }

    else if(this.state.status === 'textarea'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.textarea() )
    }

    else if(this.state.status === 'para'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.para() )
    }

    else if(this.state.status === 'strike'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.strike() )
    }

    else if(this.state.status === 'center'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.Center() )
    }

    else if(this.state.status === 'quote'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.quote() )
    }

    else if(this.state.status === 'h1'){
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading1() )
    }
    else if(this.state.status === 'h2')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading2() )
    }
    else if(this.state.status === 'h3')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading3() )
    }
    else if(this.state.status === 'h4')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading4() )
    }
    else if(this.state.status === 'h5')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading5() )
    }
    else if(this.state.status === 'h6')
    {
      this.setState({
        backgroundcolor : 'orange'
      }, () => this.heading6() )
    }

  }

  clickYellow = () =>
  {
    
    if(this.state.status === 'bold')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.clickBold() )
    }
    else if(this.state.status === 'italic'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.clickItalic() )
    }
    
    else if(this.state.status === 'marquee'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.marquee() )
    }

    else if(this.state.status === 'textarea'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.textarea() )
    }

    else if(this.state.status === 'para'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.para() )
    }

    else if(this.state.status === 'strike'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.strike() )
    }

    else if(this.state.status === 'center'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.Center() )
    }

    else if(this.state.status === 'quote'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.quote() )
    }

    else if(this.state.status === 'h1'){
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading1() )
    }
    else if(this.state.status === 'h2')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading2() )
    }
    else if(this.state.status === 'h3')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading3() )
    }
    else if(this.state.status === 'h4')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading4() )
    }
    else if(this.state.status === 'h5')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading5() )
    }
    else if(this.state.status === 'h6')
    {
      this.setState({
        backgroundcolor : 'yellow'
      }, () => this.heading6() )
    }

  }

  clickBlue = () =>
  {
    
    if(this.state.status === 'bold')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.clickBold() )
    }
    else if(this.state.status === 'italic'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.clickItalic() )
    }
    

    else if(this.state.status === 'marquee'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.marquee() )
    }

    else if(this.state.status === 'textarea'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.textarea() )
    }

    else if(this.state.status === 'para'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.para() )
    }

    else if(this.state.status === 'strike'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.strike() )
    }

    else if(this.state.status === 'center'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.Center() )
    }

    else if(this.state.status === 'quote'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.quote() )
    }

    else if(this.state.status === 'h1'){
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading1() )
    }
    else if(this.state.status === 'h2')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading2() )
    }
    else if(this.state.status === 'h3')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading3() )
    }
    else if(this.state.status === 'h4')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading4() )
    }
    else if(this.state.status === 'h5')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading5() )
    }
    else if(this.state.status === 'h6')
    {
      this.setState({
        backgroundcolor : 'blue'
      }, () => this.heading6() )
    }

  }

  clickRed = () =>
  {
    
    if(this.state.status === 'bold')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.clickBold() )
    }
    else if(this.state.status === 'italic'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.clickItalic() )
    }

    else if(this.state.status === 'textarea'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.textarea() )
    }

    else if(this.state.status === 'marquee'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.marquee() )
    }

    else if(this.state.status === 'para'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.para() )
    }

    else if(this.state.status === 'strike'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.strike() )
    }

    else if(this.state.status === 'center'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.Center() )
    }

    else if(this.state.status === 'quote'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.quote() )
    }

    else if(this.state.status === 'h1'){
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading1() )
    }
    else if(this.state.status === 'h2')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading2() )
    }
    else if(this.state.status === 'h3')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading3() )
    }
    else if(this.state.status === 'h4')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading4() )
    }
    else if(this.state.status === 'h5')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading5() )
    }
    else if(this.state.status === 'h6')
    {
      this.setState({
        backgroundcolor : 'red'
      }, () => this.heading6() )
    }

}

  handleChange(e)
  {
      //e.preventDefault();
      this.setState({
      textres : e.target.value 
    })
  }

  heading1()
  {
    this.setState({
      val :[(<h1 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h1>)],
      status : 'h1'
    })
  }

  heading2()
  {
    this.setState({
      val :[(<h2 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h2>)],
      status : 'h2'
    })
  }
  heading3()
  {
    this.setState({
      val :[(<h3 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h3>)],
      status : 'h3'
    })
  }

  heading4()
  {
    this.setState({
      val :[(<h4 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h4>)],
      status : 'h4'
    })
  }

  heading5()
  {
    this.setState({
      val :[(<h5 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h5>)],
      status : 'h5'
    })
  }

  heading6()
  {
    this.setState({
      val :[(<h6 style={{color : this.state.backgroundcolor}}>{this.state.textres}</h6>)],
      status : 'h6'
    })
  }

  render() { 
    return ( 
      <div className="cssPlay">
        <br/>
        <center>
          <h1>Play Css</h1>
          <br/>
          <br/>
        <input  className="textcss" type="text" value={this.state.textres} onChange={this.handleChange} placeholder="Enter any thing"/>
        <br/>
        <br/>
        <button className= "buttoncss"  id="bold"     onClick={this.clickBold}>Bold</button>
        <button className= "buttoncss"  id = "italic" onClick={this.clickItalic}>Italic</button>
        <button className= "buttoncss"  id="h1"       onClick={this.heading1}>h1</button>
        <button className= "buttoncss"  id="h2"       onClick={this.heading2}>h2</button>
        <button className= "buttoncss"  id="h3"       onClick={this.heading3}>h3</button>
        <br/>
        <br/>
        <button className= "buttoncss"  id="h4"       onClick={this.heading4}>h4</button>
        <button className= "buttoncss"  id="h5"       onClick={this.heading5}>h5</button>
        <button className= "buttoncss"  id="h6"       onClick={this.heading6}>h6</button>
        <button className= "buttoncss"  id="para"     onClick={this.para}>paragraph</button>
        <button className= "buttoncss"  id="center"   onClick={this.Center}>Center</button>
        <br/>
        <br/>
        
        <button className= "buttoncss"  id="marquee"   onClick={this.marquee}>marquee</button>
        <button className= "buttoncss"  id="quote"    onClick={this.quote}>quote</button>
        <button className= "buttoncss"  id="strike"   onClick={this.strike}>strike</button>
        <button className= "buttoncss"  id="textarea" onClick={this.textarea}>textarea</button>
        <center>
        <button className= "buttoncss"  id="red"  onClick={this.clickRed}>Red Colour</button>
        <button className= "buttoncss"  id="blue" onClick={this.clickBlue}>Blue Colour</button>
        <button className= "buttoncss"  id="green" onClick={this.clickGreen}>Green Colour</button>
        <button className= "buttoncss"  id="yellow" onClick={this.clickYellow}>Yellow Colour</button>
        <button className= "buttoncss"  id="orange" onClick={this.clickOrange}>Orange Colour</button>
        </center>
        <h1>{this.state.val}</h1>
        </center>
      </div>
     );
  }
}
 
export default App;

