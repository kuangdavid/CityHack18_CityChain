import React, { Component } from 'react';


import './App.css';
import './result.css';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="result-container">
        <h1>Smart planning analysis result</h1>

        <div id="result-summary">

          <h4>Your criteria are aligned with the selected area.</h4>

          <p><strong>Risks analysis result:</strong></p>
          <ul>
            <li>The power grid might not be able to support the demand (the viability assessment has to include strategy to support the development)</li>

            <li>There is a flood risk of 40%</li>

            <li>Sewerage flooding not suitable for basement development </li>
          </ul>

          <p><strong>Opportunities highlighted:</strong></p>
          <ul>

            <li>Demographic projection: <strong>40%</strong> between <strong>25</strong> and <strong>40</strong>, <strong>20%</strong> under <strong>15</strong></li>

            <li>The area is included within the <strong>Opportunities areas</strong> highlighted by City Hall</li>

            <li>The transportation system will be boosted in the next <strong>4 years</strong></li>

            <li><strong>1 new school</strong> will be developed within <strong>5 years</strong></li>
          </ul>
        </div>
        <div class="clear"></div>
        <h2>
          Considering the previous analysis there is a projected ROI of <strong>15%</strong> in the next <strong>5 years</strong>. (<a href="#">Breakdown details</a>)
      </h2>
        <div class="clear"></div>
        <div class="embed-container">
          <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="SW3 Map" src="https://www.arcgis.com/apps/Embed/index.html?webmap=0cee0945bd78496da18981fa9e43561c&amp;extent=-0.2081,51.4729,-0.0813,51.518&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light&legend=true"></iframe>
        </div>
      </div>
    );
  }
}

export default Result;
