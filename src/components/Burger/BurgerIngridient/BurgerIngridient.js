import React, {Component} from 'react';
import classes from './BurgerIngridient.css';
import PropTypes from 'prop-types';

class BurgerIngridient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type){
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div className={classes.Meat}></div>
                );
                break;
            case ('chees'):
                ingredient = (
                    <div className={classes.Cheese}></div>
                );
                break;
            case ('salad'):
                ingredient = (
                    <div className={classes.Salad}></div>
                );
                break;
            case ('bacon'):
                ingredient = (
                    <div className={classes.Bacon}></div>
                );
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngridient.propTypes = {
   type: PropTypes.string.isRequired
};

export default BurgerIngridient;