import {Row, Col, Button, Tooltip} from 'antd';
import React from 'react';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';
import { CalendarMonth, Padding } from '@mui/icons-material';

function WeekToolbar (props) {
  const formattedDate = moment (props.startDate).format ('MMM YYYY');
  return (
    <Row type="flex" gutter={4} style={toolbar}>
      <Col span={6} offset={3} style={appTitle}>
       <CalendarMonth/>&nbsp;&nbsp;Meeting Calendar
      </Col>
      <Col span={3} offset={8} style={alignRight}>
        <Tooltip placement="topLeft" title={moment ().format ('dddd, MMM D')}>
          <Button onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>

      <Col span={2} style={weekButtons}>
        <Button onClick={props.goToPreviousWeek} style={spacify} icon="<" />
        <Button onClick={props.goToNextWeek} icon=">" />
      </Col>

      <Col span={2} style={toolbarDate}>
        {formattedDate}
      </Col>

    </Row>
  );
}

export default WeekToolbar;
