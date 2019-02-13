import React from 'react';
import { connect } from 'react-redux';
import picking from 'lib/picking';
import './second.scss';
import envelope from './envelope.svg';
import { nextPhase } from 'actions/phase';
import classNames from 'classnames';

class Second extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.setState({ canOpen: true });
    }, 11200);
  }

  openEvelope() {
    if (!(this.state && this.state.open)) {
      if (this.state && this.state.canOpen) {
        this.setState({ open: true });
        setTimeout(() => {
          this.props.dispatch(nextPhase({ name: 'third' }));
        }, 1200);
      }
    }
  }

  render() {
    return (
      <div className={
        classNames("page", "second", { open: this.state && this.state.open })
      }>
        <div className="text-lines">
          <div className="today">然而今年今天</div>
          <div className="weareapart">我们天各一方</div>
          <div className="cannot">不能陪在你身边</div>
          <div className="soi">所以</div>
          <div className="please">我准备了一份特别的心意</div>
        </div>
        <div className="icon">
          <img src={envelope} className={
            classNames({ open: this.state && this.state.open })
          } onClick={this.openEvelope.bind(this)} />
          <div className="prompt">
            请打开它
            <br />
             ⃪
          </div>
        </div>
      </div>
    );
  }
}

export default connect(picking('phase'))(Second);