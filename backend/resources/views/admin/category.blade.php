@extends('layout.master')

@push('plugin-styles')
<meta name="csrf-token" content="{{ csrf_token() }}" />

    <link href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" />
@endpush

@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">ADD CATEGORY</h4>
        </div>

    </div>
    <div class="row">
        <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    @if (Session::has('message'))
                        <div class="alert alert-success">
                            <div>{{ Session::get('message') }}</div>
                        </div>
                    @endif


                    <h6 class="card-title"> Form</h6>

                    <form  action="{{ route('category.store') }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">NAME</label>
                            <div class="col-sm-9">
                                <input name="name" type="text" class="form-control"
                                    placeholder="Enter Category Name..."
                                  id="checkchar"
                                    >
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Image</label>
                            <div class="col-sm-9">
                                <input name="image" type="file" class="form-control"
                                    placeholder="Enter Category Name...">
                            </div>
                        </div>


                        <button type="submit" class="btn btn-primary me-2">Submit</button>

                    </form>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-9 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Category List</h6>

                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              @foreach ($category as $item)
                              <tr>
                                <th>1</th>
                                <td>{{$item->name}}</td>
                                <td>


                                    <img src="{{ asset("images/$item->image") }}" />


                                </td>
                                <td>
                                    <div class="icons-list row">                                        
                                        <div class="col-md-6 col-sm-12 bg-transparent justify-content-center"
                                        data-bs-toggle="modal"
                                        id="modalBTN"
                                        data-bs-target="#editmodal"

                                        onclick="EditData('{{$item->name}}','{{$item->image}}', ' {{$item->id}}')"
                                        > <i
                                                data-feather="edit"></i> </div>
                                        <div

                                        onclick="DeleteData('{{route('category.delete',[$item->id])}}')"
                                        class="col-md-6  col-sm-12 bg-transparent justify-content-center "> <i
                                                data-feather="x"></i> </div>

                                    </div>
                                </td>
                            </tr>


                              @endforeach


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="plusmodel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editmodal">Edit Category</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="btn-close"></button>
            </div>
            <div class="modal-body">
                <h5 class="modal_error alert alert-danger"></h5>
                <form  onsubmit="event.preventDefault(); EditCatData(event);" method="POST" id="editform" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="id" />
                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">NAME</label>
                        <div class="col-sm-9">
                            <input name="name" id="name" type="text"  pattern="^[a-zA-Z0-9 ]+$" class="form-control"
                                placeholder="Enter Category Name...">
                        </div>
                    </div>
                    <div class="row mb-3">

                        <img id="displayimg">
                    </div>
                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Image</label>
                        <div class="col-sm-9">
                            <input name="image" id="image" type="file" class="form-control"
                                placeholder="Enter Category Name...">
                        </div>
                    </div>



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit"  class="btn btn-primary">Save changes</button>
            </form>
            </div>
          </div>
        </div>
      </div>



@endsection

@push('plugin-scripts')
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/apexcharts/apexcharts.min.js') }}"></script>
@endpush

@push('custom-scripts')
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>
    <script src="{{ asset('assets/js/datepicker.js') }}"></script>

    <script>

        function EditData(prevName, prevImg, id){
            console.log(prevName);
            console.log(prevImg);
           
            document.querySelector(".modal_error").style.display = "none";

            
            const ModalInput  = document.querySelector("#editmodal form");
            const displayimg = document.querySelector("#editmodal #displayimg");
            ModalInput.name.value = prevName;
            ModalInput.id.value = id;
            displayimg.src= `{{ asset("images") }}/${prevImg}`;
        }


        function EditCatData(event){
    const name = event.target.name.value;
    const id = event.target.id.value;
    const image_files = event.target.image.files;
            let formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            if(image_files.length) {
                formData.append('image', image_files[0]);
            }
            let xhr = new XMLHttpRequest();
            token = document.querySelector('meta[name="csrf-token"]').content;

            xhr.open("POST", '{{route('category.update')}}', true);
            // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.setRequestHeader('X-CSRF-TOKEN', token);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    console.log(data);
                    location.reload();
                }
                if (xhr.readyState === 4 && xhr.status === 201) {

                    const data = JSON.parse(this.responseText);
                    // console.warn();
                    document.querySelector(".modal_error").style.display = "block";
                    document.querySelector('.modal_error').innerHTML = data[0];


                }
            };
            xhr.send(formData);




        }



        function DeleteData(url) {

            let text = "Are you sure to delete this record? \nEither OK or Cancel.";
            if (confirm(text) == true) {


            console.log(url);

            let token = document.querySelector('meta[name="csrf-token"]').content;
            let xhr = new XMLHttpRequest();

            xhr.open("POST", url , true);

            xhr.setRequestHeader('X-CSRF-TOKEN', token);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    location.reload();
                }
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(this.responseText);
                    location.reload();
                }
            };
            xhr.send();



        }

        document.querySelector('#checkchar').addEventListener()
        function checkchar(e){



        }
    }


    const eventTarget = document.querySelector('#checkchar');
    const name = document.querySelector('#name');
    if(typeof eventTarget !== undefined){
        eventTarget.addEventListener("keydown", FilterTitle);
    }

    if(typeof name !== undefined){
        name.addEventListener("keydown", FilterTitle);
    }
        function FilterTitle(e) {
            console.log( e.target.value);
           const str = e.target.value;
            const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '');
            e.target.value = noSpecialCharacters;

    }
    </script>

@endpush
