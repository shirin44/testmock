package eeet2582.week3.customer;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * CustomerRepository
 * Provides methods to interact with the database to store and retrieve
 * entities.
 */
public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer>{
    CustomerEntity findById(int id);
    @Query( "SELECT c FROM customers c WHERE " +
            "LOWER(c.firstName) LIKE LOWER(CONCAT('%', :searchText, '%')) OR " +
            "LOWER(c.lastName) LIKE LOWER(CONCAT('%', :searchText, '%')) OR " +
            "LOWER(c.email) LIKE LOWER(CONCAT('%', :searchText, '%')) ")
    //CustomerBalance getCustomerEntityByEmail(String email);


    List<CustomerEntity> findCustomerEntityBySearchText(@Param("searchText") String searchText);

    List<CustomerEntity> findByFirstName(String firstName);
    List<CustomerEntity> findByLastName(String lastName);
    List<CustomerEntity> findByEmail(String email);
    List<CustomerEntity> findByBalance(double balance);

    
} 
