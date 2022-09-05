import React, { Component } from "react";
import { TextField, Button, Container, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";


import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Row, Col } from "react-bootstrap";
import { Paper, withStyles, Grid } from "@material-ui/core";

const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit * 1.5,
	},
	padding: {
		padding: theme.spacing.unit,
	},
});

class Experience extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};



	render() {
		const { values } = this.props;
		const { classes } = this.props;

		return (
			<Paper className={classes.padding}>
				<Card>
					<CardHeader title="Extra Details" />
				</Card>
				<CardContent>
					<div className={classes.margin}>
						<Grid container spacing={2} alignItems="center" lg={12}>
							<Grid
								item
								xs={12}
								lg={4}
								alignItems="flex-end"
								alignContent="flex-end"
							>
								<h5>
									<CheckCircleIcon />
									<span className="pl-3">
										Skills/Languages
									</span>
								</h5>
							</Grid>
							<Grid item xs={0} lg={8} />
							<br />
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									variant="outlined"
									name="skill1"
									label="Skill Learned"
									style={{ width: "90%" }}
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									variant="outlined"
									name="skill2"
									label="Skill Discription"
									style={{ width: "90%" }}
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									variant="outlined"
									name="skill3"
									label="Future Thing to learn regarding this Skill"
									style={{ width: "90%" }}
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
						
						</Grid>
						<br />
						<Divider />
						<br />
						<Grid
							container
							spacing={2}
							alignItems="flex-start"
							lg={12}
						>
							<Grid
								item
								xs={12}
								lg={4}
								alignItems="flex-end"
								alignContent="flex-end"
							>
								<h5>
									<CheckCircleIcon />
									<span className="pl-3">About You</span>
								</h5>
							</Grid>
							<Grid item xs={0} lg={8} />
							<br />
							<Grid item md={12} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									label="Biography"
									variant="outlined"
									style={{ width: "90%" }}
									name="interest1"
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
							<Grid item md={12} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									label="Interest 2"
									variant="outlined"
									style={{ width: "90%" }}
									name="Seeking about"
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
							<Grid item md={12} sm={12} xs={12} lg={4}>
								<TextField
									margin="dense"
									label="Hubby"
									variant="outlined"
									style={{ width: "90%" }}
									name="interest3"
									onChange={this.props.handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" />
										),
									}}
								/>
							</Grid>
					
						</Grid>
					</div>
				</CardContent>
				<Container className={classes.margin}>
					<Row>
						<Col xs={4} />
						<Col xs={2}>
							<Button
								variant="contained"
								color="secondary"
								onClick={this.back}
								startIcon={<NavigateBeforeIcon />}
							>
								Back
							</Button>
						</Col>
						<Col xs={2}>
							<Button
								variant="contained"
								disabled
								color="secondary"
								onClick={this.continue}
								endIcon={<NavigateNextIcon />}
							>
								Next
							</Button>
						</Col>
						<Col xs={4} />
					</Row>
					<br />
					<Button
						variant="contained"
						color="primary"
						onClick={this.createAndDownloadPDF}
						endIcon={<GetAppIcon />}
					>
						Build Portfolio
					</Button>
				</Container>
				<p className="text-center text-muted">Page 4</p>
			</Paper>
		);
	}
}

export default withStyles(styles)(Experience);
