<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function index(): Response
    {
        if (auth()->user()->role !== 'Admin') {
            abort(403, 'Unauthorized');
        }
        return Inertia::render('Dashboard/AdminDashboard');
    }
}
