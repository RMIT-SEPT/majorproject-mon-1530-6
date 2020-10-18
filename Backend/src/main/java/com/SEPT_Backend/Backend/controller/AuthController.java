package com.SEPT_Backend.BackEnd.controller;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.SEPT_Backend.BackEnd.model.ERole;
import com.SEPT_Backend.BackEnd.model.Role;
import com.SEPT_Backend.BackEnd.model.User;
import com.SEPT_Backend.BackEnd.payload.request.LoginRequest;
import com.SEPT_Backend.BackEnd.payload.request.SignupRequest;
import com.SEPT_Backend.BackEnd.payload.response.JwtResponse;
import com.SEPT_Backend.BackEnd.payload.response.MessageResponse;
import com.SEPT_Backend.BackEnd.repository.RoleRepository;
import com.SEPT_Backend.BackEnd.repository.UserRepository;
import com.SEPT_Backend.BackEnd.security.jwt.JwtUtils;
import com.SEPT_Backend.BackEnd.security.services.UserDetailsImpl;

/*
 * This controller is responsible for logging in and Registering the user or add an employee by Admin user.
 * The credentials are stored in the database with hashed passwords along with other details. 
 * Jwt is used for authentication and authorization of users. 
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {@Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  //login for all users
  @PostMapping("/signin")
  public ResponseEntity < ?>authenticateUser(@Valid@RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
    List < String > roles = userDetails.getAuthorities().stream().map(item ->item.getAuthority()).collect(Collectors.toList());

    return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
  }
  //create new user
  @PostMapping("/signup")
  public ResponseEntity < ?>registerUser(@Valid@RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), signUpRequest.getFirstname(), signUpRequest.getLastname(), signUpRequest.getEmail(), signUpRequest.getAddress(), signUpRequest.getPhone(), encoder.encode(signUpRequest.getPassword()));

    Set < String > strRoles = signUpRequest.getRole();
    Set < Role > roles = new HashSet < >();

    if (strRoles == null && userRepository.findAll().isEmpty() == true) {
      Role admin = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
      roles.add(admin);
    }

    else {
      if (strRoles == null) {
        Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
        roles.add(userRole);
      } else {
        strRoles.forEach(role ->{
          switch (role) {
          case "admin":
            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);

            break;
          case "emp":
            Role modRole = roleRepository.findByName(ERole.ROLE_EMPLOYEE).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
            roles.add(modRole);

            break;
          default:
            Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
          }
        });
      }
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  //create a new employee
  @PostMapping("/addemp")
  public ResponseEntity < ?>addEmployee(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new employee account
    User user = new User(signUpRequest.getUsername(), signUpRequest.getFirstname(), signUpRequest.getLastname(), signUpRequest.getEmail(), signUpRequest.getAddress(), signUpRequest.getPhone(), encoder.encode(signUpRequest.getPassword()));

    Set < String > strRoles = signUpRequest.getRole();
    Set < Role > roles = new HashSet < >();

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_EMPLOYEE).orElseThrow(() ->new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("Employee registered successfully!"));
  }

}