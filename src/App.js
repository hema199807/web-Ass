import './App.css';
import weblogo from './images/Event.png'
import analytics from './images/analytics_3.png'

function App() {
  return (
    <div>
      <header id="top-bar">
        <div style={{display:"flex",alignItems: "center"}}>
          <div>
            <hr style={{width: 23+"px",border: 2+"px solid black",margin:0}}/>
            <hr style={{width: 13+"px",border: 2+"px solid black",marginTop: 2+"px",marginBottom:2+"px",marginLeft:0}}/>
            <hr style={{width: 5+"px",border: 2+"px solid black",margin:0}}/>
          </div>
          <div>
            <h2 style={{marginLeft:10+"px"}}>Admin Dashboard</h2>
          </div>
        </div>
        <div>
          <div style={{border:1+"px solid black",padding:8+"px",borderRadius:5+"px"}}>
            Preview on :<span><i className="fas fa-mobile-alt mob-lapicon"></i></span>
            <span><i className="fas fa-laptop mob-lapicon"></i></span>
          </div>
        </div>
      </header>
      <main id="main">
        <div id="left-side-menu">
          <div id="web-logo">
            <img src={weblogo} alt="web-event-logo" style={{height:100+"%",width:100+"%"}}/>
          </div>
          <div style={{display:"flex",width:21+"px",height:21+"px",backgroundColor:'rgb(92, 62, 193)',borderRadius:3+"px",textAlign:"center",marginTop:25+"px"}}>
            <hr style={{margin: 0+"px",borderBottom: 0,borderTop: 0,height: 12+"px",borderRight: 0,borderLeft: 2+"px solid white",marginTop: 7+"px",marginLeft: 5+"px"}}/>
            <hr style={{height: 16+"px",borderBottom: 0,borderLeft: 2+"px solid white",marginBottom: 2+"px",borderRight: 0,borderTop: 0,marginLeft:3+"px",marginRight:3+"px",marginTop: 3+"px"}}/>
            <hr style={{height: 8+"px",margin: 0+"px",borderTop: 0,borderBottom: 0,borderRight: 0,borderLeft: 2+"px solid white",marginTop: 11+"px"}}/>
          </div>
          <p style={{fontSize:12+"px",color:'rgb(92, 62, 193)',fontWeight:600,marginTop:2+"px",marginBottom: 30+"px"}}>Event</p>
          <div id="side-teams">
            <i className="fas fa-users"></i>
            <p style={{fontSize:12+"px",color:'rgb(92, 62, 193)',fontWeight:600,marginTop:0+"px"}}>Teams</p>
          </div>
          <div id="analytics">
            <img src={analytics} alt="analytics" style={{height:100+"%",width:100+"%"}}/>
          </div>
          <p style={{fontSize:12+"px",fontWeight:600,marginTop:2+"px",marginBottom:35+"px"}}>Analytics</p>
          <div style={{textAlign:"center"}}>
            <i className="fas fa-envelope-open-text" style={{fontSize:20+"px"}}></i>
            <p style={{fontSize:12+"px",fontWeight:600,marginTop:0+"px"}}>Results</p>
          </div>
        </div>
        <div id="content">
            <div id="event-settings">
              <p style={{fontSize:18+"px",fontWeight:400,color:"grey",paddingLeft:20+"px",boxSizing:"border-box"}}>Event settings</p>
              <hr/>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>General</p>
              </div>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>Privacy</p>
              </div>
              <div id="fea-div">
                <p style={{fontSize:14+"px",fontWeight:600,color:"rgb(92, 62, 193)"}}>Features</p>
              </div>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>Customization</p>
              </div>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>Integration</p>
              </div>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>Session Settings
                <span style={{paddingLeft:10+"px",boxSizing:"border-box"}}><i className="fas fa-lock"></i></span></p>
              </div>
              <div style={{paddingLeft:20+"px",boxSizing:"border-box"}}>
                <p style={{fontSize:14+"px",fontWeight:600,color:"grey"}}>My plans</p>
              </div>
              
            </div>
            <div id="qun-ans">
              <i className="far fa-times-circle" style={{float:"right",color:"grey",fontSize:25+"px",padding:10+"px",boxSizing:"border-box"}}></i>
              <div style={{marginTop:40+"px",paddingLeft:100+"px",paddingRight:150+"px",boxSizing:"border-box"}}>
                <div id="main-content-qun">
                  <div>
                    <i className="fas fa-comment-alt" style={{color:"rgb(92, 62, 193)"}}></i>
                    <span style={{marginLeft:10+"px",color:"rgb(92, 62, 193)",fontWeight:600}}>Audience Q&A</span>
                  </div>
                  <div style={{display:'flex',alignItems:"center"}}>
                    <div className="toggle-on"><span className="dot-toggle"></span></div>
                    <i className="fas fa-chevron-up" style={{color:"rgb(92, 62, 193)"}}></i>
                  </div> 
                </div>
                <hr/>
                <div style={{paddingLeft:25+"px",paddingRight:38+"px"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Moderation</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>Easily review all questions before they go live.</p>
                    </div>
                    <div className="toggle-off"><span className="dot-toggle-off"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Labels</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>categorize and filter questions</p>
                    </div>
                    <div className="toggle-on" style={{marginBottom:20+"px"}}><span className="dot-toggle"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Downvotes</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>Enable downvoting of questions</p>
                    </div>
                    <div className="toggle-on" style={{marginBottom:20+"px"}}><span className="dot-toggle"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Replies</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>Allow participants to reply to or comment on questions.</p>
                    </div>
                    <div className="toggle-on" style={{marginBottom:20+"px"}}><span className="dot-toggle"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Anonymous questions</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>Let your participants send anonymous questions</p>
                    </div>
                    <div className="toggle-on" style={{marginBottom:20+"px"}}><span className="dot-toggle"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Maximum question length</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0,marginBottom:0}}>Show number of votes insted of percentage</p>
                      <div style={{display:"flex",marginBottom:-10+"px",justifyContent:"space-around"}}>
                        <p className="vote">160</p>
                        <p className="vote">240</p>
                        <p id="M-v">300</p>
                      </div>
                    </div>
                    <div className="toggle-off" style={{marginBottom:20+"px"}}><span className="dot-toggle-off"></span></div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:'space-between',marginBottom:-4+"px"}}>
                    <div>
                      <h5 style={{margin:0}}>Close questions</h5>
                      <p style={{fontSize:12+"px",color:"GrayText",marginTop:0}}>Prevent the participants from sending new questions to your event.</p>
                    </div>
                    <div className="toggle-on" style={{marginBottom:20+"px"}}><span className="dot-toggle"></span></div>
                  </div>
                </div> 
              </div>
              <button id="btn-save">Save</button>
            </div>
        </div>
        <div id="right-side-menu">
          <div id="user-logo">
            <i className="fas fa-user" style={{marginTop:6+"px",color:"white"}}></i>
            <span id="active"></span>
          </div>
          <div id="notifications">
            <i className="fas fa-bell" style={{fontSize:10+"px",color:"white",position: "absolute",top: 5+"px",left: 5+"px"}}></i>
            <div id="active-notification"><span className="noti-value">0</span></div>
          </div>
          <div style={{position:"relative"}}>
            <i className="fas fa-comments" style={{fontSize:20+"px",color:"grey"}}></i>
            <div id="active-msg"><span className="noti-value">0</span></div>
          </div>
          <div id="settings">
            <i className="fas fa-cog" style={{fontSize:12+"px",color:"white",position: "absolute",top: 5+"px",right: 4+"px"}}></i>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
