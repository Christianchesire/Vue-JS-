new Vue({
	el: '#exercise',
	data: {
		name: 'Chris',
		age: 24,
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewevolutiondesigns.com%2F20-cool-hd-wallpapers&psig=AOvVaw3_yFX6LBXcoAhK2E8kjpV-&ust=1599670037184000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjkrLSB2usCFQAAAAAdAAAAABAD'
	},

	methods: {
		random: function() {
			return Math.random();
		}
	}
});