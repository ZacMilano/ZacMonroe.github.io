import React, {Component} from "react";

const formatData = (data) => {
  return (<ol class="data-container">{data.map(formatOneData)}</ol>);
}

const formatOneData = (dataInstance) => {
  return (
    <li class="data-instance">
      <span class="data-instance-topic">{
        dataInstance.topic.toString()
      }</span>
      <span class="data-instance-score">{
        dataInstance.botscore.toPrecision(3).toString()
      }</span>
    </li>
  );
}

export default formatData;