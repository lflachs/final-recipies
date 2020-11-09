import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Routes() {
	<Router>
		<Header />
		{categories.map((categorie, index) => (
			<Link to={categorie !== 'All' ? `/${categorie}` : `/`}>
				<Button key={index} name={categorie} />
			</Link>
		))}
		<Link to='/favorite'>Fav</Link>
		<Switch>
			<Route
				path='/'
				exact
				render={() => (
					<RandomSelection
						favorites={this.state.favorite}
						onFavorite={(item) => this.handleFavorite(item)}
					/>
				)}
			/>
			<Route
				path='/favorite'
				exact
				render={() => (
					<Favorite
						onFavorite={(item) => this.handleFavorite(item)}
						meals={favorite}
						favorites={this.state.favorite}
					/>
				)}
			/>
			<Route
				path='/:filter'
				exact
				render={(props) => (
					<Categories favorites={this.state.favorite} {...props} />
				)}
			/>
			<Route path='*' component={NotFound} />
		</Switch>
	</Router>;
}
export default Routes;
