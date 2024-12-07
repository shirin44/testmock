package eeet2582.week3.customer;

import jakarta.persistence.*;
import lombok.Data;
@Entity(name = "customers")
/**
* Defines the data structure*/
public class CustomerEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)

    private int id;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "balance")
    private double balance;

    public CustomerEntity() {}

    protected CustomerEntity(String firstName, String lastName, String email, double balance) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.balance = balance;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public double getBalance() {
        return balance;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }

    

}
