package com.SEPT_Backend.Backend.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

public class RolesImpl {
	
	/*
	
	private final String INSERT_SQL = "INSERT INTO ROLES(name) values(:name)";

	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public User create(final User user) {
		KeyHolder holder = new GeneratedKeyHolder();
			SqlParameterSource parameters = new MapSqlParameterSource()
					.addValue("name", user.getName())
					.addValue("address", user.getAddress())
					.addValue("email", user.getEmail());
			namedParameterJdbcTemplate.update(INSERT_SQL, parameters, holder);
			user.setId(holder.getKey().intValue());
			return user;
		}*/

}
