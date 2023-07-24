import React from 'react';

class AdvListRow extends React.Component {

    constructor(props) {
        super(props);
        this.Id = props.Id;
        this.Title = props.Title;
        this.PostedOn = props.PostedOn;
        this.PostedBy = props.PostedBy;
    }

    handleApprove(){
        alert("approved");
    }

    handleReject(){
        alert("rejected");
    }


    render() {
        return (
            <tr className="row"  data-advid={this.Id} >
                <td className="col">{this.Title}</td>
                <td className="col-2">{this.PostedOn}</td>
                <td className="col-2">{this.PostedBy}</td>
                <td className="col-3">
                    <button type="button" onClick={this.handleApprove} className="btn btn-success"><i className="fa fa-check"></i></button>&nbsp;
                    <button type="button" onClick={this.handleReject} className="btn btn-danger"><i className="fa fa-times"></i></button>
                </td>
            </tr>);
    }
}

class AdvList extends React.Component {

    constructor(props) {
        super(props)
        this.Advertisements = [
            { "Id": 1, "Title" : "Aaaa aaaaa aaa", "PostedOn" : "15-May-2023", "PostedBy" : "Ali Saleem"  },
            { "Id": 2, "Title" : "Bbbb bbbbb bbbb", "PostedOn" : "1-May-2023", "PostedBy" : "Ali Saleem"  },
            { "Id": 3, "Title" : "Cccc cccc ccccc", "PostedOn" : "16-May-2023", "PostedBy" : "Ali Saleem"  },
            { "Id": 4, "Title" : "Ddddd dddd ddddd", "PostedOn" : "7-May-2023", "PostedBy" : "Ali Saleem"  }
        ]
    }



    render() {
        return (
            <table className="table table-bordered caption-top">
                <caption className="px-3 py-2 bg-primary text-white fw-bold"><i className="fa fa-tags"></i>
                    Approve / Reject Advertisements
                </caption>
                <thead>
                    <tr className="row text-primary">
                        <th className="col">Title</th>
                        <th className="col-2">Posted On</th>
                        <th className="col-2">User</th>
                        <th className="col-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.Advertisements.map(adv => 
                            <AdvListRow key={adv.Id} Id={adv.Id} Title={adv.Title} PostedOn={adv.PostedOn} PostedBy={adv.PostedBy} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default AdvList