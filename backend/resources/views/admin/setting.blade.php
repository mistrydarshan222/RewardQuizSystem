<?php
$Parsedown = new Parsedown();
?>


@extends('layout.master')

@push('plugin-styles')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="{{ asset('assets/plugins/simplemde/simplemde.min.css') }}" rel="stylesheet" />

    <link href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" />
@endpush



@section('content')
    <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">

        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
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


                        <h6 class="card-title">Form</h6>
                @foreach ($data as $item)


                        <form action="{{ route('update.setting') }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                        <input type="hidden" name="id" value="1" />
                          <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <label for="Logo" class="col-sm-3 col-form-label">Logo</label>
                                    <img class="" src="{{ asset("images/$item->logo") }}" />
                                    <div class="col-sm-9">
                                        <input name="logo" type="file" class="form-control"
                                          placeholder="Upload Logo">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <label for="favicon" class="col-sm-3 col-form-label">favicon</label>
                                    <img class="" src="{{ asset("images/$item->favicon") }}" />
                                    <div class="col-sm-9">
                                        <input name="favicon" type="file" class="form-control"
                                            placeholder="Upload Logo">
                                    </div>
                                </div>
                            </div>
                          </div>

                          <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="Title" class="form-label">Title</label>
                                <input name="title" value="{{$item->title}}"  type="text" class="form-control" id="Title" placeholder="Title....">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="metadescription" class="form-label">Meta description</label>
                                <input name="metadescription" value="{{$item->metadescription}}"  type="text" class="form-control" id="metadescription" placeholder="meta description...." required>
                            </div>
                          </div>

                          <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="metakeywords" class="form-label">Meta Keywords</label>
                                <input name="metakeywords" value="{{$item->metakeywords}}"  type="text" class="form-control" id="metakeywords" placeholder="Meta Keywords...." required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="metaogdescription" class="form-label">Meta og:description</label>
                                <input name="metaogdescription" value="{{$item->metaogdescription}}"  type="text" class="form-control" id="metaogdescription" placeholder="Enter meta og:description...." required>
                            </div>
                          </div>                          

                          <div class="row mb-3">                           
                            <div class="col-md-12 mb-3">
                                <label for="publisherid" class="form-label">Publisher ID</label>
                                <input name="publisherid" value="{{$item->publisherid}}"  type="text" class="form-control" id="publisherid" placeholder="publisher Id....">
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="mb-3">
                                        <label for="Headerscript" class="form-label">Header Script</label>
                                        <textarea name="headerScript"
                                        class="form-control" id="Headerscript" rows="3">{{$item->headerScript}}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="mb-3">
                                        <label for="footerScript" class="form-label">Footer Script</label>
                                        <textarea name="footerScript"
                                        class="form-control" id="footerScript" rows="3">{{$item->footerScript}}</textarea>
                                    </div>
                                </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="mb-3">
                                        <label for="quizrules" class="form-label">Quiz Rules</label>
                                        <textarea name="quizrules" id="simpleMdeExample3"
                                        class="form-control" id="quizrules" rows="3">{{$item->quizrules}}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="mb-3">
                                        <label for="privacypolicy" class="form-label">Privacy Policy</label>
                                        <textarea name="privacypolicy" id="simpleMdeExample4"
                                        class="form-control" id="privacypolicy" rows="3">{{$item->privacypolicy}}</textarea>
                                    </div>
                                </div>
                            </div>
                          </div>                          

                          <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="row mb-3">
                                        <label for="exampleInputUsername2" 
                                        class="form-label">First Page Instructions</label>
                                        <textarea name="Firstpageinstructions" class="form-control" 
                                        name="tinymce"
                                        id="simpleMdeExample" rows="8">{{$item->Firstpageinstructions}}</textarea>
                                    </div>
                                </div>
                            </div> 
                            
                            <div class="col-md-6">
                                <div class="row mb-3">
                                    <div class="row mb-3">
                                        <label for="exampleInputUsername2" 
                                        class="form-label">LoginPage Instructions</label>
                                        <textarea name="LoginPageinstructions" class="form-control" 
                                        name="tinymce"
                                        id="simpleMdeExample2" rows="8">{{$item->LoginPageinstructions}}</textarea>
                                    </div>
                                </div>
                            </div> 
                          </div>                        

                        <button type="submit" class="btn btn-primary me-2">Submit</button>

                        </form>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>




@endsection

@push('plugin-scripts')
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/apexcharts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/simplemde/simplemde.min.js') }}"></script>
@endpush


@push('custom-scripts')
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>
    <script src="{{ asset('assets/js/datepicker.js') }}"></script>



    
<script>

    $(function() {
        'use strict';
        /*simplemde editor*/
        if ($("#simpleMdeExample").length) {
            var simplemde = new SimpleMDE({
                toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview","fullscreen"],
                element: $("#simpleMdeExample")[0]
            });
        }

    });

    $(function() {
        'use strict';
        /*simplemde editor*/
        if ($("#simpleMdeExample2").length) {
            var simplemde = new SimpleMDE({
                toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview","fullscreen"],
                element: $("#simpleMdeExample2")[0]
            });
        }

    });


    $(function() {
        'use strict';
        /*simplemde editor*/
        if ($("#simpleMdeExample3").length) {
            var simplemde = new SimpleMDE({
                toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview","fullscreen"],
                element: $("#simpleMdeExample3")[0]
            });
        }

    });
    
    $(function() {
        'use strict';
        /*simplemde editor*/
        if ($("#simpleMdeExample4").length) {
            var simplemde = new SimpleMDE({
                toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "preview","fullscreen"],
                element: $("#simpleMdeExample4")[0]
            });
        }

    });

    </script>
@endpush

