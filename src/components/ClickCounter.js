import React, { Component } from 'react';
import withCounter from './withCounter';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    handleClick = () => {
        this.setState({
            loading: true,
        });
        setInterval(()=>{
            this.setState({
                loading: false,
            });
        }, 3000);
    }

    render() {
        const { count, incrementCount } = this.props;

        return (
            <React.Fragment>
                <Button variant="outlined" className="counter-click-btn m-2" onClick={incrementCount}>
                    Click { count } times
                </Button>
                <LoadingButton
                    size="small"
                    onClick={this.handleClick}
                    startIcon={<SaveIcon />}
                    loading={this.state.loading}
                    loadingPosition="start"
                    variant="contained"
                >
                    Save
                </LoadingButton>
            </React.Fragment>
        );
    }
}

export default withCounter(ClickCounter);
