import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import styles from './Pagination.css';

class Pagination extends Component {

    handleNextPageClick = () => {
        if(this.props.pageNumber < this.props.totalPages){
            this.props.goToPage(this.props.pageNumber + 1);
        }
    }

    handlePrevPageClick = () => {
        if(this.props.pageNumber > 1) {
            this.props.goToPage(this.props.pageNumber - 1);
        }
    }


    render() {
        const {pageNumber, totalPages} = this.props;
        const isFirstPage = pageNumber < 2;
        const isLastPage =  pageNumber === totalPages;

        return (
            <section className={styles.pagination}>
                <a
                    className={classnames(styles.arrow, {
                        [styles.disabled]: totalPages < 2 || isFirstPage
                    })}
                    onClick={this.handlePrevPageClick}
                >
                    &lt;
                </a>
                <label className={styles.pageNumber}>
                    <small>{pageNumber}</small>
                </label>
                <a
                    className={classnames(styles.arrow, {
                        [styles.disabled]: totalPages < 2 || isLastPage
                    })}
                    onClick={this.handleNextPageClick}
                >
                    &gt;
                </a>
            </section>
        )
    }
}

Pagination.PropTypes = {
    pageNumber: 0,
    totalPages: 1,
}

Pagination.PropTypes = {
    pageNumber: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    goToPage: PropTypes.func.isRequired,
}

export default Pagination;