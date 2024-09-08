package com.example.DoAn1.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.example.DoAn1.utils.UtilsHandleJwtToken;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

        @Autowired
        private UtilsHandleJwtToken utilsHandleJwtToken;

        private final String[] GetPublicEnpoints = {

        };

        private final String[] PostPublicEnpoints = {
                        "/test/test",
                        "/user/SignUp"
        };

        private final String[] PostAdmin = {
                        "/test/testAuthorization"
        };

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

                httpSecurity.authorizeHttpRequests(authorize -> authorize
                                .requestMatchers(HttpMethod.GET, GetPublicEnpoints).permitAll()
                                .requestMatchers("/static/**").permitAll() // Allow access to static resources
                                .requestMatchers(HttpMethod.POST, PostPublicEnpoints).permitAll()
                                .requestMatchers(HttpMethod.POST, PostAdmin).hasAuthority("SCOPE_ROLE_admin")
                                .anyRequest().authenticated());

                // Handle 401 Unauthorized responses
                httpSecurity.oauth2ResourceServer(oauth2 -> oauth2
                                .jwt(jwtConfigurer -> jwtConfigurer
                                                .decoder(this.utilsHandleJwtToken.jwtDecoder()))
                                .authenticationEntryPoint(new JwtTAuthenticationEntryPoint()))
                                // catch 403
                                .exceptionHandling()
                                .accessDeniedHandler(new JwtAuthorizationEntryPoint());

                // Disable CSRF protection
                httpSecurity.csrf(csrf -> csrf.disable());

                return httpSecurity.build();
        }
}
