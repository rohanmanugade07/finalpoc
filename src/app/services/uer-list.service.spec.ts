import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { UerListService } from "./uer-list.service";


describe('UerListService',()=>{
  let service : UerListService;
  let httpController : HttpTestingController;

  let mockUserList = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" }
  ];

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule] 
    });

      service = TestBed.inject(UerListService);
      httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUserList and return an array of User',() =>{
    
    service.getUserList().subscribe((res) =>{
      expect(res).toEqual(mockUserList)
    });
     const req = httpController.expectOne({
      method : 'GET',
      url : 'https://jsonplaceholder.typicode.com/users'
     });

     req.flush(mockUserList);
  });

  it('should call getUserDetails and return the appropriate User',() =>{
    //Arrange
    const id = 1;

    //Act
    service.getUserDetails(id).subscribe((res) =>{

    //Assert
      expect(res).toEqual(mockUserList)
    });
     const req = httpController.expectOne({
      method : 'GET',
      url : "https://reqres.in/api/users/"+id
     });

     req.flush(mockUserList);
  });

  it('should call getSingleProductDetails and return the single product details',() =>{
    //Arrange
    const pro_id = 1;

    //Act
    service.getSingleProductDetails(pro_id).subscribe((res) =>{

    //Assert
      expect(res).toEqual(mockUserList)
    });
     const req = httpController.expectOne({
      method : 'GET',
      url : "https://fakestoreapi.com/products/"+ pro_id
     });

     req.flush(mockUserList);
  });

  it('should call getProductList and return an array of Product',() =>{
    
    service.getProductList().subscribe((res) =>{
      expect(res).toEqual(mockUserList)
    });
     const req = httpController.expectOne({
      method : 'GET',
      url : 'https://fakestoreapi.com/products'
     });

     req.flush(mockUserList);
  });

  it('should add an employee and return it', (done) => {
    const newEmp = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
    const responseObject = {
      'id': 4,
      'token': "QpwL5tke4Pnpja7X4"
    };
    let response = null;
    service.addUser('/register', newEmp).subscribe(
      data => {
        let response = data;
        done();
        expect(response).toEqual(responseObject);
      });

    // addEmploye should have made one request to POST employee
    const req = httpController.expectOne("https://reqres.in/api/register");
    req.flush(responseObject);
    done();
    expect(req.request.method).toEqual('POST');
    
  });

});