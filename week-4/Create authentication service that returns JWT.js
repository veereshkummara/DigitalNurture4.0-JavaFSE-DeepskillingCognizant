
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private static final String SECRET_KEY = "mysecretkey123";

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public TokenResponse authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            // Decode Base64 username:password
            String base64Credentials = authHeader.substring("Basic ".length());
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            // Validate username/password (simple demo logic)
            if ("user".equals(username) && "pwd".equals(password)) {
                String token = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 hour
                        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                        .compact();
                return new TokenResponse(token);
            }
        }

        throw new RuntimeException("Invalid credentials");
    }

    public static class TokenResponse {
        private String token;

        public TokenResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}
