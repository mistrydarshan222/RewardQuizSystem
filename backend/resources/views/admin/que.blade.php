@extends('layout.master')

@push('plugin-styles')
<meta name="csrf-token" content="{{ csrf_token() }}" />

    <link href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" />
@endpush

@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
            <h4 class="mb-3 mb-md-0">CATEGORY</h4>
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


                    <form action="{{ route('que.store') }}" method="POST" id="editform" >
                        @csrf

                        <input type="hidden" name="quiz_id" value="{{$id}}" />
                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Question</label>
                            <div class="col-sm-9">
                                <input name="que" id="name" type="text" class="form-control"
                                    placeholder="Enter Question Name...">
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION A</label>
                            <div class="col-sm-9">
                                <input name="option1" id="name" type="text" class="form-control"
                                    placeholder="Enter OPTION  A ...">
                            </div>
                        </div>



                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION B</label>
                            <div class="col-sm-9">
                                <input name="option2" id="name" type="text" class="form-control"
                                    placeholder="Enter OPTION B ...">
                            </div>
                        </div>



                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION C</label>
                            <div class="col-sm-9">
                                <input name="option3" id="name" type="text" class="form-control"
                                    placeholder="Enter OPTION C...">
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION D</label>
                            <div class="col-sm-9">
                                <input name="option4" id="name" type="text" class="form-control"
                                    placeholder="Enter OPTION D...">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="exampleInputUsername2" class="col-sm-3 col-form-label">CORRECT</label>
                            <div class="col-sm-9">
                                <select  class="form-control" name="correct">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
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
    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Category List</h6>

                    <div class="table-responsive">
                        <table class="table table-hover" style="table-layout: fixed;">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Question</th>
                                    <th>option A</th>
                                    <th>option B</th>
                                    <th>option C</th>
                                    <th>option D</th>
                                    <th>Correct</th>
                                </tr>
                            </thead>
                            <tbody>
                              @foreach ($que as $key=>$item)
                              <tr>
                                <th>{{$key+1}}</th>
                                <td style="word-break:break-word">{{$item->que}}</td>
                                <td style="word-break:break-word">{{$item->option1}}</td>
                                <td style="word-break:break-word">{{$item->option2}}</td>
                                <td style="word-break:break-word">{{$item->option3}}</td>
                                <td style="word-break:break-word">{{$item->option4}}</td>
                                <td style="word-break:break-word">{{$item->correct}}</td>


                                <td>
                                    <div class="icons-list row">

                                        <div class="col-md-6 col-sm-12 bg-transparent justify-content-center"
                                        data-bs-toggle="modal"
                                        id="modalBTN"
                                        data-bs-target="#editmodal"

                                        onclick="EditData('{{$item->id}}',
                                        '{{$item->que}}',
                                        '{{$item->option1}}',
                                        '{{$item->option2}}',
                                        '{{$item->option3}}',
                                        '{{$item->option4}}',
                                        '{{$item->correct}}',
                                        '{{$item->quiz_id}}')"
                                        > <i
                                            data-feather="edit"></i> </div>
                                        <div

                                        onclick="DeleteData('{{route('que.deleted',[$item->id])}}')"
                                        class="col-md-6 col-sm-12 bg-transparent justify-content-center "> <i
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
                <form action="{{ route('que.edited') }}" method="POST" id="editform" >
                    @csrf
                    <input type="hidden" name="id" />
                    <input type="hidden" name="quiz_id" />

                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Question</label>
                        <div class="col-sm-9">
                            <input name="que" id="name" type="text" class="form-control"
                                placeholder="Enter Question Name...">
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION A</label>
                        <div class="col-sm-9">
                            <input name="option1" id="name" type="text" class="form-control"
                                placeholder="Enter OPTION  A ...">
                        </div>
                    </div>



                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION B</label>
                        <div class="col-sm-9">
                            <input name="option2" id="name" type="text" class="form-control"
                                placeholder="Enter OPTION B ...">
                        </div>
                    </div>



                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION C</label>
                        <div class="col-sm-9">
                            <input name="option3" id="name" type="text" class="form-control"
                                placeholder="Enter OPTION C...">
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">OPTION D</label>
                        <div class="col-sm-9">
                            <input name="option4" id="name" type="text" class="form-control"
                                placeholder="Enter OPTION D...">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="exampleInputUsername2" class="col-sm-3 col-form-label">CORRECT</label>
                        <div class="col-sm-9">
                            <select  class="form-control" name="correct">
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
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

        function EditData(id, que, option1, option2, option3, option4, correct, quiz_id){

            const ModalInput  = document.querySelector("#editmodal form");
            ModalInput.id.value = id;
            ModalInput.que.value = que;
            ModalInput.option1.value = option1;
            ModalInput.option2.value = option2;
            ModalInput.option3.value = option3;
            ModalInput.option4.value = option4;
            ModalInput.correct.value = correct;
            ModalInput.quiz_id.value = quiz_id;


        }


// function EditCatData(event){
//     const name = event.target.name.value;
//     const id = event.target.id.value;

//             let formData = new FormData();
//             formData.append('id', id);
//             formData.append('name', name);

//             let xhr = new XMLHttpRequest();
//             token = document.querySelector('meta[name="csrf-token"]').content;

//             xhr.open("POST", '{{ route('que.edited') }}', true);
//             // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//             xhr.setRequestHeader('X-CSRF-TOKEN', token);
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     const data = JSON.parse(this.responseText);
//                     location.reload();
//                 }
//             };
//             xhr.send(formData);

//         }



        function DeleteData(url) {

            let text = "Are you sure to delete this record? \nEither OK or Cancel.";
            if (confirm(text) == true) {

                window.location.href = url;

        }
    }

    </script>

@endpush
