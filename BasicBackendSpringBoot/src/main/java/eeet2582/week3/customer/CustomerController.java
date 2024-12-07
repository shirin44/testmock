package eeet2582.week3.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
/*This annotation allows cross-
origin requests from the specified origin (http://localhost:3000).
This is often used for frontend-backend communication when they are running on different ports or
domains.*/
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/all")
    ResponseEntity<List<CustomerEntity>> getAllCustomers() {
        Optional<List<CustomerEntity>> customers = customerService.getAllCustomers();

        return customers.map(customerEntities -> new ResponseEntity<>(
                customerEntities, HttpStatus.OK
        )).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("")
    CustomerEntity createCustomer(@RequestBody CustomerEntity customerData) {
        return customerService.createCustomer(customerData);
    }

    @PutMapping("update/{id}")
    ResponseEntity<CustomerEntity> updateCustomer(@RequestBody  CustomerEntity customerData, @PathVariable Integer id) {
        Optional<CustomerEntity> retrieve = customerService.updateCustomer(customerData,id);
        return retrieve.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<CustomerEntity> deleteCustomer(@PathVariable Integer id) {
        Optional<CustomerEntity> retrieve = customerService.deleteCustomer(id);
        return retrieve.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/page")
    ResponseEntity<Page<CustomerEntity>> getCustomerPage(@RequestParam(defaultValue="0") int pageNo,
                                                         @RequestParam(defaultValue = "7") int pageSize){
        return ResponseEntity.ok(this.customerService.getCustomerPage(PageRequest.of(pageNo,pageSize)));
    }

    @GetMapping("/search/{searchText}")
    ResponseEntity<List<CustomerEntity>> searchCustomers(@PathVariable String searchText){
        Optional<List<CustomerEntity>> resultedCustomer = customerService.searchCustomers(searchText);
        return  ResponseEntity.of(resultedCustomer);
    }

//    @GetMapping("/balance/{email}")
//    CustomerBalance getCustomerBalanceByEmail(@PathVariable String email) {
//        return customerService.getCustomerBalance(email);
//    }

}