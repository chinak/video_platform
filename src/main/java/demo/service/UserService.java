package demo.service;


import demo.model.User;
import org.hibernate.validator.constraints.Email;

public interface UserService {

    public User findByEmail(String Email);
    public void saveUser(User user);
}
