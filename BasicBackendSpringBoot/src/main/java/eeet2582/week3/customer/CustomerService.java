package eeet2582.week3.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eeet2582.week3.customer.dto.CustomerBalance;

/**
 *  Leverages the repository to perform business logic operations, such as
 * creating, updating, deleting, and retrieving entities
 */
@Component
class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    List<CustomerEntity> getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    CustomerEntity createCustomer(CustomerEntity customerEntity) {
        return customerRepository.save(customerEntity);
    }

//    CustomerBalance getCustomerBalance(String email) {
//        return customerRepository.getCustomerEntityByEmail(email);
//    }

    public Optional<List<CustomerEntity>> getAllCustomers() {
        return Optional.of(customerRepository.findAll());
    }

    public Optional<List<CustomerEntity>> searchCustomers(String searchText){
        return Optional.of(customerRepository.findCustomerEntityBySearchText(searchText));
    }

    public Optional<List<CustomerEntity>> getFilterFirstName(String firstName){
        return Optional.of(customerRepository.findByFirstName(firstName));
    }

    public Optional<List<CustomerEntity>> getFilterLastName(String lastName){
        return Optional.of(customerRepository.findByLastName(lastName));
    }

    public Optional<List<CustomerEntity>> getFilterBalance(double balance){
        return Optional.of(customerRepository.findByBalance(balance));
    }

    public Optional<CustomerEntity> updateCustomer(CustomerEntity customer,Integer id){
        Optional<CustomerEntity> old=  this.customerRepository.findById(id);
        Optional<CustomerEntity> updated =  this.customerRepository.findById(id);
        if(old.isPresent()){
            updated.get().setFirstName(customer.getFirstName());
            updated.get().setLastName(customer.getLastName());
            updated.get().setEmail(customer.getEmail());
            updated.get().setBalance(customer.getBalance());
            this.customerRepository.save(updated.get());
            return updated;
        }
        return old;
    }

    public Optional<CustomerEntity> deleteCustomer(int id){
        Optional<CustomerEntity> deleteItem= Optional.ofNullable(this.customerRepository.findById(id));
        deleteItem.ifPresent(customer -> this.customerRepository.delete(customer));

        return deleteItem;
    }

     public Page<CustomerEntity> getCustomerPage(Pageable pageable){
        return this.customerRepository.findAll(pageable);
     }



}
