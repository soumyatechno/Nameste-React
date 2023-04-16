
    const heading = React.createElement('h1',{id:"heading",xyz:"abc"},'Hello World from React');
    
  

    // <div id="parent">
    //    <div id="child">
    //     <h1></h1>
    //  <h2></h2>
    //    </div>
    // </div>

    const parent = React.createElement('div',{id:'parent'},
    [
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{id:'child_1'},'Hi there'),React.createElement('h2',{id:'child_2'},'How are you?')]),
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{id:'child_1'},'Hi'),React.createElement('h2',{id:'child_2'},'Hello ?')])]
     );

     const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(parent);
    root.render(parent);